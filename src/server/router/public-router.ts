import { createRouter } from "server/router/context";
import { z } from "zod";

export const publicRouter = createRouter()
  .query("allChores", {
    async resolve({ ctx }) {
      return await ctx.prisma.chore.findMany()
    },
  })
  .mutation("addChore", {
    input: z.object({
      name: z.string(),
      pointValue: z.number(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.chore.create({
        data: { name: input.name, pointValue: input.pointValue },
      });
    },
  });

// .query("hello", {
//   input: z
//     .object({
//       text: z.string().nullish(),
//     })
//     .nullish(),
//   resolve({ input }) {
//     return {
//       greeting: `Hello ${input?.text ?? "world"}`,
//     };
//   },
// })
// .query("getAll", {
//   async resolve({ ctx }) {
//     return await ctx.prisma.chore.create({ data: {} });
//   },
// })
