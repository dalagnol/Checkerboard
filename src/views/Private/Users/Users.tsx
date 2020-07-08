import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "theme";
import { themejson } from "./json";
import { useLocale } from "locale";
import { dictionary } from "./json";
import { UserContext } from "controllers";
import { useHistory } from "react-router-dom";
import { profile } from "routes/paths";
import { IUser } from "interfaces/user";

import {
  Container,
  Main,
  Title,
  Users as Element,
  UserTile,
  Header,
  Subheader,
  Delete,
} from "./styles";
import { SearchBar } from "components";

export function Users() {
  const { user, users, remove } = useContext(UserContext);
  const { Text } = useLocale("Users", dictionary);
  useTheme("Users", themejson);

  const [usersAppearing, setUsersAppearing] = useState<Array<IUser>>(users);

  const { push } = useHistory();

  const usersList = usersAppearing.map(
    (x) =>
      x.id !== user?.id && (
        <UserTile key={x.id}>
          <div onClick={() => x.id && push(profile(x.id))}>
            <Header>{x.name}</Header>
            <Subheader>
              <Text>{x.type ? "Common" : "Administrator"}</Text>
            </Subheader>
          </div>
          {x.id !== 0 && <Delete onClick={() => remove(x.id)} />}
        </UserTile>
      )
  );

  useEffect(() => {
    setUsersAppearing(users);
  }, [users]);

  return (
    <Container>
      {!user?.type ? (
        <Main>
          <Title>
            <Text>User Management</Text>
          </Title>
          <SearchBar setUsersAppearing={setUsersAppearing} />
          <Element>
            {!usersList.length || (usersList.length === 1 && !usersList[0]) ? (
              <Header>
                <Text>There are no users</Text>
              </Header>
            ) : (
              usersList
            )}
          </Element>
        </Main>
      ) : (
        <Title>
          <Text>Common users don't have access to this feature.</Text>
        </Title>
      )}
    </Container>
  );
}
