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

export type IThemes = "light" | "dark";

export type ILangs = "en" | "pt";

export interface IUser {
  id: number;
  type: IUserType;
  name: string;
  email: string;
  gender: string;
  password: string;
  grids: Array<Grids.IGrid>;
  theme: IThemes;
  lang: ILangs;
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
  setUserGrid: (id: number, name: string, data: Grids.GridBinary) => void;
  createGrid: (name: string) => void;
  removeGrid: (id: number) => void;
  ready: boolean;
};
