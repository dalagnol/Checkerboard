import React, { useContext } from "react";
import { Private, Public } from "routes";
import { UserContext } from "controllers";

import { Sidebar } from "components";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Sidebar />
      {user ? <Private /> : <Public />}
    </>
  );
}
