import React, { useContext } from "react";
import { UserContext } from "controllers";
import { useTheme } from "theme";
import themejson from "./json/theme.json";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { Form } from "./Form/Form";
import { AdminAccess } from "./AdminAccess/AdminAccess";

export function Profile() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  useTheme("Profile", themejson);

  return (
    <Container>
      {user?.id === Number(id) ? <Form /> : <AdminAccess id={Number(id)} />}
    </Container>
  );
}
