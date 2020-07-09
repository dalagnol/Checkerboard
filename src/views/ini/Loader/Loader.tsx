import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Container, Load } from "./styles";

export function Loader() {
  useTheme("Loader", themejson);
  return (
    <Container>
      <Load />
    </Container>
  );
}
