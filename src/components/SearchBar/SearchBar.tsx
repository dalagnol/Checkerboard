import React from "react";

import { Container, SearchIcon } from "./styles";
import { Input } from "components";

export function SearchBar() {
  return (
    <Container>
      <Input
        type={"text"}
        name={"user"}
        onChange={() => {
          console.log("hey");
        }}
      />
      <SearchIcon />
    </Container>
  );
}
