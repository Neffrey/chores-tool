import { createAdminRouter } from "server/router/context";

// PROTECTED ROUTER
export const adminRouter = createAdminRouter()
  // USER ROUTES
  .query("getAllUsers", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  });
