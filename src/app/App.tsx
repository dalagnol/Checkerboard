import React, { useContext } from "react";
import { Private, Public } from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "controllers";

import { Sidebar } from "components";
import { Container } from "./styles";
import { Loader } from "views";

export default function App() {
  const { ready, user } = useContext(UserContext);

  return (
    <Router>
      <Container>
        <Sidebar />
        {ready ? user ? <Private /> : <Public /> : <Loader />}
      </Container>
    </Router>
  );
}
