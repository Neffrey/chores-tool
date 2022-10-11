import { createRouter } from "server/router/context";
import { z } from "zod";

export const publicRouter = createRouter()
  .query("getAllChores", {
    async resolve({ ctx }) {
      return await ctx.prisma.chore.findMany();
    },
  })
  .mutation("addChore", {
    input: z.object({
      name: z.string(),
      isDifficult: z.boolean(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.create({
        data: {
          name: input.name,
          isDifficult: input.isDifficult,
        },
      });
    },
  });
