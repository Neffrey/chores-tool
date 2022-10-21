import { createRouter } from "server/router/context";

export const publicRouter = createRouter().query("getAllChores", {
  async resolve({ ctx }) {
    return await ctx.prisma.chore.findMany({
      include: { user: { select: { name: true } } },
    });
  },
});
