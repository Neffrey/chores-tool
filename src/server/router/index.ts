// src/server/router/index.ts
import { createRouter } from "server/router/context";
import superjson from "superjson";

import { userRouter } from "server/router/user-router";
import { adminRouter } from "server/router/admin-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("admin.", adminRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
