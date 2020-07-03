import React, { useState, useEffect, useCallback } from "react";
import { UserContext } from "./context";
import { IUser, IUserType, ICreateUserData } from "interfaces/user";
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
  const [user, setUser] = useState<IUser | null>(load(LS_USER_KEY));
  const [database, setDatabase] = useState<Array<IUser>>(load(LS_DATABASE_KEY));

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
        save(LS_USER_KEY, match);
      } else {
        if (match) {
          throw new Error("Wrong password");
        } else {
          throw new Error("User does not exist");
        }
      }
    },
    [matching, setUser]
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
            throw new Error("Password must have more than 6 character");
          }
        } else {
          throw new Error("Invalid email");
        }
      } else {
        throw new Error("You must insert a name");
      }
    },
    [setUser, updateDB]
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
            throw new Error("Password must have more than 6 character");
          }
        } else {
          throw new Error("Invalid email");
        }
      } else {
        throw new Error("You must insert a name");
      }
    },
    [database, updateDB]
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

  return (
    <UserContext.Provider
      value={{
        user,
        users: database,
        authenticate,
        update,
        logout,
        create,
        remove,
        changeType
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
