import React, { useContext, useCallback } from "react";
import { UserContext } from "controllers";

import { Container, SearchIcon } from "./styles";
import { Input } from "components";

interface Props {
  setUsersAppearing: Function;
}
export function SearchBar({ setUsersAppearing }: Props) {
  const { users } = useContext(UserContext);

  const filterUsers = useCallback(
    (data: string) => {
      const res = users.filter(user =>
        user.name.toLowerCase().includes(data.toLowerCase())
      );
      setUsersAppearing(res);
    },
    [users, setUsersAppearing]
  );

  const onChangeHandler = (e: any) => {
    const {
      target: { value }
    } = e;
    if (value) {
      filterUsers(value);
    } else {
      setUsersAppearing(users);
    }
  };

  return (
    <Container>
      <Input type={"text"} name={"user"} onChange={onChangeHandler} />
      <SearchIcon />
    </Container>
  );
}
