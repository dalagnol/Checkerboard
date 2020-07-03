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
  authErrors: {
    credential: false,
    password: false
  },
  update(user: IUser) {
    return false;
  },
  updateErrors: {
    name: false,
    email: false,
    password: false
  },
  logout() {},
  create(data: ICreateUserData) {
    return false;
  },
  createErrors: {
    name: false,
    email: false,
    password: false
  },
  remove(id: number) {},
  changeType(id: number, type: IUserType) {}
});
