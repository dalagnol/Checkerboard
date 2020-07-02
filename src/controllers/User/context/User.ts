import { createContext } from "react";

import { IUserContext, IUser } from "interfaces/user";

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
  logout() {},
  updateErrors: {
    name: false,
    email: false,
    password: false
  }
});
