import * as z from "zod";
import { createProtectedRouter } from "./context";

// Example router with queries that can only be hit if the user requesting is signed in
export const userRouter = createProtectedRouter()
  .query("getUser", {
    async resolve({ ctx }) {
      if (ctx.session.user.id)
        return await ctx.prisma.user.findUnique({
          where: { id: ctx.session.user.id },
        });
    },
  })
  .query("getSecretMessage", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
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
  });
