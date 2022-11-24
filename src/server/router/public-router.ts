import * as z from "zod";
import { createPublicRouter } from "server/router/context";

// PROTECTED ROUTER
export const publicRouter = createPublicRouter()
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