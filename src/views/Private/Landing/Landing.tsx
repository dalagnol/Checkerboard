import React, { useContext } from "react";
import { useTheme } from "theme";
import { useLocale } from "locale";
import { dictionary, themejson } from "./json";
import { UserContext } from "controllers";

import { Container, Title } from "./styles";

export function Landing() {
  const { user } = useContext(UserContext);
  useTheme("Landing", themejson);
  const { Text } = useLocale("Landing", dictionary, {
    gender: user?.gender.toLowerCase()
  });

  return (
    <Container>
      <Title>
        <Text>Welcome</Text> {user?.name}
      </Title>
    </Container>
  );
}
