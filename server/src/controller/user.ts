import { UserCreateType, UserGetType } from "../schema/userRouter.schema";

const fakeUserDB = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
];

const userGetAll = async () => fakeUserDB;

const userGet = async (input: UserGetType) => fakeUserDB.find((item) => item.id === input.id);

const userCreate = async (input: UserCreateType) => {
  return {
    id: new Date().toTimeString(),
    name: input.name,
  };
};

export { userGet, userGetAll, userCreate };
