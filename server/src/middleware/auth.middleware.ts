import { TRPCError } from "@trpc/server";
import { t } from "../trpc/trpc";

interface MyContext {
  authed?: boolean;
  // other properties...
}

export { fakeAuth, authRequired };

const fakeAuth = t.middleware(async (opts) => {
  const { ctx, next } = opts;

  console.log("ctx fakeAuth", ctx);

  return next({
    ctx: { authed: true },
  });
});

const authRequired = t.middleware(async (opts) => {
  const { ctx, next } = opts;

  if (!(ctx as MyContext)?.authed) throw new TRPCError({ code: "UNAUTHORIZED" });

  console.log("ctx authReq", ctx);

  return next();
});
