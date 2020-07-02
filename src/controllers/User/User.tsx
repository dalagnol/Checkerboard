import React, { useState, useEffect, useCallback } from "react";
import { UserContext } from "./context";
import {
  IUser,
  IAuthenticateErrors,
  IUpdateErrors,
  IUserType,
  ICreateUserData
} from "interfaces/user";
import { save, load } from "helpers";

const LS_USER_KEY = "user";
const LS_DATABASE_KEY = "users";

interface Props {
  children: any;
}
interface User {
  id: number;
  type: IUserType;
  name: string;
  email: string;
  gender: string;
  password: string;
}

export function User({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);
  const [database, setDatabase] = useState<Array<IUser>>(load(LS_DATABASE_KEY));
  const [authErrors, setAuthErrors] = useState<IAuthenticateErrors>({
    credential: false,
    password: false
  });
  const [updateErrors, setUpdateErrors] = useState<IUpdateErrors>({
    name: false,
    email: false,
    password: false
  });

  useEffect(() => {
    if (!database) {
      localStorage.clear();
      const users = [
        {
          id: 0,
          name: "root",
          type: 0,
          email: "root@icloud.com",
          gender: "Male",
          password: "123test"
        }
      ];
      save(LS_DATABASE_KEY, users);
      setDatabase(users);
    }
    if (load(LS_USER_KEY)! instanceof User) {
      setUser(null);
    } else {
      setUser(load(LS_USER_KEY));
    }
    // eslint-disable-next-line
  }, []);

  const clearUpdateErrors = () => {
    setTimeout(() => {
      setUpdateErrors({
        name: false,
        email: false,
        password: false
      });
    }, 2000);
  };

  const matching = useCallback(
    (credential: string) => {
      return (
        database.find((x: IUser) => x.email === credential) ||
        database.find((x: IUser) => x.name === credential)
      );
    },
    [database]
  );

  const authenticate = useCallback(
    (credential: string, password: string) => {
      const match = matching(credential);

      if (match && match.password === password) {
        setUser(match);
        setAuthErrors({
          credential: false,
          password: false
        });
        save(LS_USER_KEY, match);
      } else {
        match
          ? setAuthErrors({
              credential: false,
              password: true
            })
          : setAuthErrors({
              credential: true,
              password: false
            });
        setTimeout(() => {
          setAuthErrors({
            credential: false,
            password: false
          });
        }, 1000);
      }
    },
    [matching, setAuthErrors, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const updateDB = useCallback(
    (newUser: IUser) => {
      const res = database.map(user =>
        user.id === newUser.id ? newUser : user
      );
      setDatabase(res);
      save(LS_DATABASE_KEY, res);
    },
    [database, setDatabase]
  );

  const update = useCallback(
    (user: IUser) => {
      const { name, email, password } = user;

      if (name) {
        if (email && email.includes("@")) {
          if (password && password.length > 6) {
            setUser(user);
            updateDB(user);
            return true;
          } else {
            setUpdateErrors({
              ...updateErrors,
              password: true
            });
          }
        } else {
          setUpdateErrors({
            ...updateErrors,
            email: true
          });
        }
      } else {
        setUpdateErrors({
          ...updateErrors,
          name: true
        });
      }
      return false;
    },
    [setUser, setUpdateErrors, updateDB, updateErrors]
  );

  const create = useCallback((data: ICreateUserData) => {
    
  }, []);

  useEffect(() => {
    save(LS_USER_KEY, user);
  }, [user]);

  useEffect(() => {
    if (Object.values(updateErrors).some(value => value === true)) {
      clearUpdateErrors();
    }
  }, [updateErrors]);

  return (
    <UserContext.Provider
      value={{
        user,
        users: database,
        authenticate,
        authErrors,
        update,
        logout,
        updateErrors
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
