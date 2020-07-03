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
}

export type IUserContext = {
  user: IUser | null;
  users: Array<IUser>;
  authenticate: (credential: string, password: string) => void;
  authErrors: IAuthenticateErrors;
  update: (user: IUser) => boolean;
  updateErrors: IUpdateErrors;
  logout: () => void;
  create: (data: ICreateUserData) => boolean;
  createErrors: ICreateErrors;
  remove: (id: number) => void;
  changeType: (id: number, type: number) => void;
};
