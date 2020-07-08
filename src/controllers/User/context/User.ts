import { createContext } from "react";

import {
  IUserContext,
  IUser,
  ICreateUserData,
  IUserType,
} from "interfaces/user";
import { Grids } from "interfaces/grids";

export const User = createContext<IUserContext>({
  user: null,
  users: [],
  grids: [{ id: 0, name: "", data: "" }],
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
  },
  setUserGrid(id: number, data: Grids.GridBinary) {},
});
