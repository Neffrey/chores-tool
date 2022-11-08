import * as z from "zod";
import { createAdminRouter } from "server/router/context";

// PROTECTED ROUTER
export const adminRouter = createAdminRouter()
  // USER ROUTES
  .query("getAllUsers", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("updateUser", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      role: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
          role: input.role,
        },
      });
    },
  })
  .mutation("deleteUser", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.delete({
        where: { id: input.id },
      });
    },
  });
