import { TRepository } from "./TRepository";
import { TUser } from "./TUser";

export type TUserData = {
  user: TUser;
  repositories: TRepository[];
};
