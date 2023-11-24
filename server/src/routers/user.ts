import { t } from "../trpc/trpc";
import { authRequired, fakeAuth } from "../middleware/auth.middleware";
import { userCreateInput, userGetInput } from "../schema/userRouter.schema";
import { userCreate, userGet, userGetAll } from "../controller/user";

const userRouter = t.router({
  get: t.procedure.input(userGetInput).mutation(({ input }) => userGet(input)),

  getAll: t.procedure.query(userGetAll),

  create: t.procedure
    .use(fakeAuth)
    .use(authRequired)
    .input(userCreateInput)
    .mutation(({ input }) => userCreate(input)),
});

export { userRouter };
