import { TypeOf, number, object, string } from "zod";

export const userCreateInput = object({ name: string() });
export const userGetInput = object({ id: number() });

export type UserCreateType = TypeOf<typeof userCreateInput>;
export type UserGetType = TypeOf<typeof userGetInput>;
