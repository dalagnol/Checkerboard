import React from "react";
import { useTheme } from "theme";
import themejson from "./json/theme.json";

import { Container } from "./styles";
import { Form } from "./Form/Form";

export function Login() {
  useTheme("Login", themejson);

  return (
    <Container>
      <Form />
    </Container>
  );
}
