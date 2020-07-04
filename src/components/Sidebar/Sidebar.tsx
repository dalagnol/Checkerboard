import React, { useContext } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { useTheme } from "theme";
import { themejson } from "./json";

import { useHistory, useLocation } from "react-router-dom";
import { landing, profile, checkerboard } from "routes/paths";

import {
  Container,
  Sidebar as Element,
  Light,
  Dark,
  Language,
  Main,
  Checkerboard,
  Profile,
  Logout
} from "./styles";

export function Sidebar() {
  const { user, logout } = useContext(UserContext);
  const { set, language } = useLocale("Sidebar", { en: {}, pt: {} });
  const { theme } = useTheme("Sidebar", themejson);

  const oppositeLang = language === "en" ? "pt" : "en";

  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Container>
      <Element>
        {theme.current === "light" ? (
          <Light onClick={() => theme.set("dark")} />
        ) : (
          <Dark onClick={() => theme.set("light")} />
        )}
        <Language onClick={() => set(oppositeLang)} />
        {user && (
          <>
            <Main
              onClick={() => push(landing())}
              selected={pathname === landing()}
            />
            <Checkerboard
              onClick={() => push(checkerboard())}
              selected={pathname === checkerboard()}
            />
            <Profile
              onClick={() => push(profile())}
              selected={pathname === profile()}
            />
            <Logout onClick={() => logout()} />
          </>
        )}
      </Element>
    </Container>
  );
}
