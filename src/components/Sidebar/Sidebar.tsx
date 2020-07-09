import React, { useContext } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { useTheme } from "theme";
import { themejson } from "./json";

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
  const { user, logout } = useContext(UserContext);
  const { set, language } = useLocale("Sidebar", { en: {}, pt: {} });
  const { theme } = useTheme("Sidebar", themejson);

  const oppositeLang = language === "en" ? "pt" : "en";

  const { push } = useHistory();
  const { pathname } = useLocation();

  const dull = pathname.includes("grid/");
  return (
    <Element dull={dull}>
      {theme.current === "light" ? (
        <Light onClick={() => theme.set("dark")} dull={dull} />
      ) : (
        <Dark onClick={() => theme.set("light")} dull={dull} />
      )}
      <Language onClick={() => set(oppositeLang)} dull={dull} />
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
