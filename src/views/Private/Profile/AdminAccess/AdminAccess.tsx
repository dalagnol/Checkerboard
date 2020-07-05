import React, { useState, useContext } from "react";
import { UserContext } from "controllers";
import { IUser } from "interfaces/user";
import { useLocale } from "locale";
import { dictionary } from "../json";

import { Radio, Button } from "components";
import { Main, Title, Subheader, Radios, Label } from "./styles";

export function AdminAccess({ id }: Props) {
  const { Text } = useLocale("Profile", dictionary);
  const { user, users, changeType } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState<IUser>(
    users.find(user => user.id === id)!
  );

  return !user?.type ? (
    <Main>
      <Title>{selectedUser.name}</Title>
      <Subheader>{selectedUser.email}</Subheader>
      <Radios>
        <div>
          <Radio
            name={"type"}
            defaultChecked={!selectedUser?.type}
            onChange={() => setSelectedUser({ ...selectedUser, type: 0 })}
          />
          <Label>
            <Text>Administrator</Text>
          </Label>
        </div>
        <div>
          <Radio
            name={"type"}
            defaultChecked={!!selectedUser?.type}
            onChange={() => setSelectedUser({ ...selectedUser, type: 1 })}
          />
          <Label>
            <Text>Common</Text>
          </Label>
        </div>
      </Radios>
      <Button onClick={() => changeType(selectedUser.id, selectedUser.type)}>
        <Text>Save</Text>
      </Button>
    </Main>
  ) : (
    <Title>Common users don't have access to this feature.</Title>
  );
}

interface Props {
  id: number;
}
