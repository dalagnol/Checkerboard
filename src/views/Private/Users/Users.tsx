import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Container, Main, Title } from "./styles";

export function Users() {
  useTheme("Users", themejson);
  return (
    <Container>
      <Main>
        <Title>User Management</Title>
      </Main>
    </Container>
  );
}
