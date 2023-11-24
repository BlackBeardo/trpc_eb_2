import { t } from "../trpc/trpc";

const roleGet = async () => ({ id: 1, name: "Role 1" });

const roleRouter = t.router({
  getAll: t.procedure.query(roleGet),
});

export { roleRouter };
