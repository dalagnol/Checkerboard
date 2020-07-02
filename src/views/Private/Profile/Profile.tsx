import React from "react";
import { useTheme } from "theme";
import themejson from "./json/theme.json";

import { Container } from "./styles";
import { Form } from "./Form/Form";

export function Profile() {
  useTheme("Profile", themejson);

  return (
    <Container>
      <Form />
    </Container>
  );
}
