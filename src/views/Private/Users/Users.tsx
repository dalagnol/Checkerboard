import React, { useState, useContext, useMemo } from "react";
import { useTheme } from "theme";
import { themejson } from "./json";
import { UserContext } from "controllers";
import { IUserType } from "interfaces/user";

import {
  Container,
  Main,
  Title,
  Users as Element,
  UserTile,
  Header,
  Subheader,
  Delete,
  Radios,
  Label
} from "./styles";
import { Radio, Button } from "components";

export function Users() {
  const [selectedUser, setSelectedUser] = useState<IData | null>(null);
  const { user, users, remove, changeType } = useContext(UserContext);
  useTheme("Users", themejson);

  const usersList = useMemo(
    () =>
      users.map(
        x =>
          x.id !== user?.id && (
            <UserTile
              onClick={() =>
                setSelectedUser({ id: x.id, name: x.name, email: x.email, type: x.type })
              }
              key={x.id}
            >
              <div>
                <Header>{x.name}</Header>
                <Subheader>{x.type ? "Common" : "Administrator"}</Subheader>
              </div>
              {x.id !== 0 && <Delete onClick={() => remove(x.id)} />}
            </UserTile>
          )
      ),
    [users, user, remove]
  );

  return (
    <Container>
      <Main>
        <Title>{selectedUser ? selectedUser.name : "User Management"}</Title>
        <Element>
          {selectedUser ? (
            <>
              <Header>{selectedUser.email}</Header>
              <Radios>
                <div>
                  <Radio
                    name={"type"}
                    defaultChecked={!selectedUser?.type}
                    onChange={() => setSelectedUser({...selectedUser, type: 0})}
                  />
                  <Label>
                    Administrator
                  </Label>
                </div>
                <div>
                  <Radio
                    name={"type"}
                    defaultChecked={!!selectedUser?.type}
                    onChange={() => setSelectedUser({...selectedUser, type: 1})}
                  />
                  <Label>
                    Common
                  </Label>
                </div>
              </Radios>
              <Button onClick={() => changeType(selectedUser.id, selectedUser.type)}>Save</Button>
            </>
          ) : usersList.length === 1 && !usersList[0] ? (
            <Header>There are no users</Header>
          ) : (
            usersList
          )}
        </Element>
      </Main>
    </Container>
  );
}

interface IData {
  id: number;
  name: string;
  email: string;
  type: IUserType;
}
