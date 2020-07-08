import React, { useContext } from "react";
import { Private, Public } from "routes";
import { UserContext } from "controllers";

import { Sidebar } from "components";
import { Container } from "./styles";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Sidebar />
      {user ? <Private /> : <Public />}
    </Container>
  );
}
