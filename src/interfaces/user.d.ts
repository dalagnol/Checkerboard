import { Grids } from "./grids";

export type IAuthenticateErrors = {
  credential: boolean;
  password: boolean;
};

export type IUpdateErrors = {
  name: boolean;
  email: boolean;
  password: boolean;
};

export type ICreateErrors = {
  name: boolean;
  email: boolean;
  password: boolean;
  maxUsers: boolean;
};

export type IUserType = 0 | 1;

export type ICreateUserData = {
  type?: IUserType;
  name: string;
  email: string;
  gender: string;
  password: string;
};

export interface IUser {
  id: number;
  type: IUserType;
  name: string;
  email: string;
  gender: string;
  password: string;
  grids: Array<Grids.IGrid>;
}

export type IUserContext = {
  user: IUser | null;
  users: Array<IUser>;
  grids: Array<Grids.IGrid>;
  authenticate: (credential: string, password: string) => void;
  update: (user: IUser) => boolean;
  logout: () => void;
  create: (data: ICreateUserData) => boolean;
  remove: (id: number) => void;
  changeType: (id: number, type: IUserTypes) => boolean;
  setUserGrid: (id: number, data: Grids.GridBinary) => void;
};
