import React, { useState, useEffect, useCallback } from "react";
import { UserContext } from "./context";
import {
  IUser,
  IAuthenticateErrors,
  IUpdateErrors,
  IUserType,
  ICreateUserData
} from "interfaces/user";
import { save, load, findAvailableId, checkLS } from "helpers";

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
  const [createErrors, setCreateErrors] = useState<IUpdateErrors>({
    name: false,
    email: false,
    password: false
  });

  useEffect(() => {
    checkLS(["theme", "user"], {
      theme: ["light", "dark"],
      user: {
        id: 0,
        name: "",
        type: 0,
        email: "",
        gender: "",
        password: ""
      }
    });
    if (!database) {
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
    // eslint-disable-next-line
  }, []);

  const clearErrors = (type: Function) => {
    setTimeout(() => {
      type({
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
    (newUser: IUser, add: boolean) => {
      if (add) {
        database.push(newUser);
        save(LS_DATABASE_KEY, database);
      } else {
        const res = database.map(user =>
          user.id === newUser.id ? newUser : user
        );
        setDatabase(res);
        save(LS_DATABASE_KEY, res);
      }
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
            updateDB(user, false);
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

  const create = useCallback(
    (data: ICreateUserData) => {
      const { name, email, password, type } = data;

      if (name) {
        if (email && email.includes("@")) {
          if (password && password.length > 6) {
            updateDB(
              {
                ...data,
                id: findAvailableId(database),
                type: type || 1
              },
              true
            );
            return true;
          } else {
            setCreateErrors({
              ...createErrors,
              password: true
            });
          }
        } else {
          setCreateErrors({
            ...createErrors,
            email: true
          });
        }
      } else {
        setCreateErrors({
          ...createErrors,
          name: true
        });
      }

      return false;
    },
    [createErrors, database, updateDB]
  );

  const remove = useCallback(
    (id: number) => {
      const res = database.filter(user => user.id !== id);
      setDatabase(res);
      save(LS_DATABASE_KEY, res);
    },
    [database, setDatabase]
  );

  const changeType = useCallback(
    (id: number, type: IUserType) => {
      const res = database.map(user =>
        user.id === id ? { ...user, type: type } : user
      );
      setDatabase(res);
      save(LS_DATABASE_KEY, res);
    },
    [database, setDatabase]
  );

  useEffect(() => {
    save(LS_USER_KEY, user);
  }, [user]);

  useEffect(() => {
    if (Object.values(updateErrors).some(value => value === true)) {
      clearErrors(setUpdateErrors);
    }
    if (Object.values(createErrors).some(value => value === true)) {
      clearErrors(setCreateErrors);
    }
  }, [updateErrors, createErrors]);

  return (
    <UserContext.Provider
      value={{
        user,
        users: database,
        authenticate,
        authErrors,
        update,
        updateErrors,
        logout,
        create,
        createErrors,
        remove,
        changeType
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
