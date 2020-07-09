import React, { useContext, useCallback } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { useTheme } from "theme";
import { themejson } from "./json";
import { IThemes, ILangs } from "interfaces/user";

import { useHistory, useLocation } from "react-router-dom";
import { landing, profile, grids, users } from "routes/paths";

import {
  Sidebar as Element,
  Light,
  Dark,
  Language,
  Main,
  Checkerboard,
  Profile,
  UsersManagement,
  Logout,
} from "./styles";

export function Sidebar() {
  const { user, update, logout } = useContext(UserContext);
  const { set, language } = useLocale("Sidebar", { en: {}, pt: {} });
  const { theme } = useTheme("Sidebar", themejson);

  const oppositeLang = language === "en" ? "pt" : "en";

  const { push } = useHistory();
  const { pathname } = useLocation();

  const setTheme = useCallback(
    (t: IThemes) => {
      theme.set(t);
      if (user) {
        update({ ...user, theme: t });
      }
    },
    [theme, user, update]
  );

  const setLang = useCallback(
    (l: ILangs) => {
      set(l);
      if (user) {
        update({ ...user, lang: l });
      }
    },
    [set, user, update]
  );

  const dull = pathname.includes("grid/");

  return (
    <Element dull={dull}>
      {theme.current === "light" ? (
        <Light onClick={() => setTheme("dark")} dull={dull} />
      ) : (
        <Dark onClick={() => setTheme("light")} dull={dull} />
      )}
      <Language onClick={() => setLang(oppositeLang)} dull={dull} />
      {user && (
        <>
          <Main
            onClick={() => push(landing())}
            selected={pathname === landing()}
            dull={dull}
          />
          <Checkerboard
            onClick={() => push(grids())}
            selected={pathname === grids()}
            dull={dull}
          />
          <Profile
            onClick={() => push(profile(user?.id))}
            selected={pathname.includes("/user/")}
            dull={dull}
          />
          {!user?.type && (
            <UsersManagement
              onClick={() => push(users())}
              selected={pathname === users()}
              dull={dull}
            />
          )}
          <Logout onClick={() => logout()} dull={dull} />
        </>
      )}
    </Element>
  );
}
