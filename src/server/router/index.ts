// src/server/router/index.ts
import { createRouter } from "server/router/context";
import superjson from "superjson";

import { publicRouter } from "server/router/public-router";
import { userRouter } from "server/router/user-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("public.", publicRouter)
  .merge("private.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
