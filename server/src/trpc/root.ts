import { t } from "./trpc";
import { roleRouter } from "../routers/role";
import { userRouter } from "../routers/user";

export const appRouter = t.router({
  user: userRouter,
  role: roleRouter,
});

// You can then access the merged or this individual route with
// http://localhost:8080/api/trpc/<NAMESPACE>.<PROCEDURE>

export type AppRouter = typeof appRouter;
