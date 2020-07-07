import { createContext } from "react";

import {
  IUserContext,
  IUser,
  ICreateUserData,
  IUserType
} from "interfaces/user";

export const User = createContext<IUserContext>({
  user: null,
  users: [],
  authenticate(credential: string, password: string) {},
  update(user: IUser) {
    return false;
  },
  logout() {},
  create(data: ICreateUserData) {
    return false;
  },
  remove(id: number) {},
  changeType(id: number, type: IUserType) {
    return false;
  }
});
