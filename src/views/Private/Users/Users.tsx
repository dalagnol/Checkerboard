import React, { useContext, useMemo } from "react";
import { useTheme } from "theme";
import { themejson } from "./json";
import { UserContext } from "controllers";

import {
  Container,
  Main,
  Title,
  Users as Element,
  UserTile,
  Header,
  Subheader,
  Delete
} from "./styles";

export function Users() {
  const { user, users, remove } = useContext(UserContext);
  useTheme("Users", themejson);

  const usersList = useMemo(
    () =>
      users.map(
        x =>
          x.id !== user?.id && (
            <UserTile key={x.id}>
              <div>
                <Header>{x.name}</Header>
                <Subheader>{x.type ? "Common" : "Administrator"}</Subheader>
              </div>
              <Delete onClick={() => remove(x.id)} />
            </UserTile>
          )
      ),
    [users, user, remove]
  );

  return (
    <Container>
      <Main>
        <Title>User Management</Title>
        <Element>
          {usersList.length === 1 && !usersList[0] ? (
            <Header>There are no users</Header>
          ) : (
            usersList
          )}
        </Element>
      </Main>
    </Container>
  );
}
