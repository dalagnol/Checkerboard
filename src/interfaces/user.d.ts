export type IAuthenticateErrors = {
  credential: boolean;
  password: boolean;
};

export type IUpdateErrors = {
  name: boolean;
  email: boolean;
  password: boolean;
};

export interface IUser {
  id: number;
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
};
