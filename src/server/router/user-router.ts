import * as z from "zod";
import { createUserRouter } from "server/router/context";

// PROTECTED ROUTER
export const userRouter = createUserRouter()
  // USER ROUTES
  .query("getUser", {
    async resolve({ ctx }) {
      if (ctx.session.user.id)
        return await ctx.prisma.user.findUnique({
          where: { id: ctx.session.user.id },
        });
    },
  })
  .mutation("changeName", {
    input: z.object({
      name: z.string().min(2).max(20),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          name: input.name,
        },
      });
    },
  })
  .query("getAllUsers", {
    async resolve({ ctx }) {
      if (ctx.session.user.id)
        return await ctx.prisma.user.findMany({
          where: {
            OR: [
              {
                role: "admin",
              },
              { role: "user" },
            ],
          },
          select: {
            id: true,
            name: true,
          },
        });
    },
  })

  // CHORE ROUTES
  .query("getAllChores", {
    async resolve({ ctx }) {
      return await ctx.prisma.chore.findMany({
        include: { user: { select: { name: true } } },
      });
    },
  })
  .mutation("addCompletedChore", {
    input: z.object({
      name: z.string().min(1).max(50),
      comment: z.string(),
      isDifficult: z.boolean(),
      time: z.number().min(0).max(100), // time in 5 minute chunks rounded up
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
          date: new Date(),
          comment: input.comment,
          isDifficult: input.isDifficult,
          time: input.time,
          points: !input.isDifficult ? input.time : Math.ceil(input.time * 1.5),
          status: "completed",
          ActionLog: {
            create: {
              date: new Date(),
              userId: ctx.session.user.id,
              type: "added",
            },
          },
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    },
  })
  .mutation("addTodoChore", {
    input: z.object({
      name: z.string().min(1).max(50),
      comment: z.string(),
      deadline: z.date(),
      user: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
          date: new Date(),
          comment: input.comment,
          status: "todo",
          ActionLog: {
            create: {
              date: new Date(),
              userId: ctx.session.user.id,
              type: "added",
            },
          },
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    },
  })
  .mutation("updateChore", {
    input: z.object({
      id: z.string(),
      name: z.string().min(3).max(50),
      userId: z.string(),
      date: z.date(),
      comment: z.string(),
      isDifficult: z.boolean(),
      status: z.string(),
      points: z.number().min(0).max(100),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.update({
        where: { id: input.id },
        data: {
          name: input.name,
          userId: input.userId,
          date: input.date,
          comment: input.comment,
          isDifficult: input.isDifficult,
          points: input.points,
          ActionLog: {
            create: {
              date: new Date(),
              userId: ctx.session.user.id,
              type: "updated",
            },
          },
        },
      });
    },
  })
  .mutation("deleteChore", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.delete({
        where: { id: input.id },
      });
    },
  });
