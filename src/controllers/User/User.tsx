import React, { useState, useEffect, useCallback } from "react";
import { UserContext } from "./context";
import { IUser, IUserType, ICreateUserData } from "interfaces/user";
import {
  save,
  load,
  findAvailableId,
  checkLS,
  checkIfUserExists,
  randomGrid,
  toBinary,
} from "helpers";
import { Grids } from "interfaces/grids";
import { useTheme } from "theme";
import { useLocale } from "locale";

const LS_USER_KEY = "user";
const LS_DATABASE_KEY = "users";

interface Props {
  children: any;
}

export function User({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);
  const [database, setDatabase] = useState<Array<IUser>>(load(LS_DATABASE_KEY));
  const [ready, setReady] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(true);

  const { set } = useLocale("UserContext", { en: {}, pt: {} });
  const { theme } = useTheme();

  useEffect(() => {
    checkLS(["theme", "lang", "user"], {
      theme: ["light", "dark"],
      lang: ["en", "pt"],
      user: {
        id: 0,
        name: "",
        email: "",
        gender: "",
        password: "",
        type: 0,
        grids: [],
        theme: "",
        lang: "",
      },
    });
    setUser(load(LS_USER_KEY));
    if (!database) {
      const users = [
        {
          id: 0,
          name: "root",
          email: "root@icloud.com",
          gender: "Male",
          password: "123test",
          type: 0,
          grids: [{ id: 0, name: "first", data: toBinary(randomGrid()) }],
          theme: "light",
          lang: "en",
        },
      ];
      setDatabase(users as Array<IUser>);
    }
    setReady(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user && init) {
      theme.set(user?.theme);
      set(user?.lang);
      setInit(false);
    }
  }, [user, theme, set, init]);

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

  const updateDB = useCallback(
    (newUser: IUser, add: boolean) => {
      if (add) {
        database.push(newUser);
        save(LS_DATABASE_KEY, database);
      } else {
        const res = database.map((user) =>
          user.id === newUser.id ? newUser : user
        );
        setDatabase(res);
      }
    },
    [database, setDatabase]
  );

  const logout = useCallback(() => {
    updateDB(user!, false);
    setUser(null);
  }, [user, setUser, updateDB]);

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

      if (database.length === 10) {
        throw new Error("Max number of users reached");
      } else {
        if (name) {
          try {
            checkIfUserExists(database, name, email);
          } catch ({ message }) {
            switch (message) {
              case "Name is already being used":
                throw new Error("Name is already being used");
              case "Email is already being used":
                throw new Error("Email is already being used");
              default:
                throw new Error("Name is already being used");
            }
          }
          if (email && email.includes("@")) {
            if (password && password.length > 6) {
              updateDB(
                {
                  id: findAvailableId(database),
                  type: type || 1,
                  ...data,
                  grids: [
                    { id: 0, name: "First", data: toBinary(randomGrid()) },
                  ],
                  theme: "light",
                  lang: "en",
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
      }
    },
    [database, updateDB]
  );

  const remove = useCallback(
    (id: number) => {
      const res = database.filter((user) => user.id !== id);
      setDatabase(res);
    },
    [database, setDatabase]
  );

  const changeType = useCallback(
    (id: number, type: IUserType) => {
      const res = database.map((user) =>
        user.id === id ? { ...user, type: type } : user
      );
      setDatabase(res);

      return true;
    },
    [database, setDatabase]
  );

  const setUserGrid = useCallback(
    (id: number, name: string, data: Grids.GridBinary) => {
      if (
        name &&
        !user!.grids.find((grid) => grid.name === name && grid.id !== id)
      ) {
        setUser({
          ...user,
          grids: user!.grids.map((grid) =>
            grid.id === id ? { id, name, data } : grid
          ),
        } as IUser);
      } else {
        throw new Error("This name is already being used");
      }
    },
    [user]
  );

  const createGrid = useCallback(
    (name: string) => {
      if (user!.grids.find((grid) => grid.name === name)) {
        throw new Error("This name is already being used");
      } else {
        setUser({
          ...user,
          grids: [
            ...user!.grids,
            {
              id: findAvailableId(user!.grids),
              name,
              data: toBinary(randomGrid()),
            },
          ],
        } as IUser);
      }
    },
    [user]
  );

  const removeGrid = useCallback(
    (id: number) => {
      setUser({
        ...user,
        grids: user!.grids.filter((grid) => grid.id !== id),
      } as IUser);
    },
    [user]
  );

  useEffect(() => {
    save(LS_USER_KEY, user);
  }, [user]);

  useEffect(() => {
    save(LS_DATABASE_KEY, database);
  }, [database]);

  return (
    <UserContext.Provider
      value={{
        user,
        users: database,
        grids: user?.grids!,
        authenticate,
        update,
        logout,
        create,
        remove,
        changeType,
        setUserGrid,
        createGrid,
        removeGrid,
        ready,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
