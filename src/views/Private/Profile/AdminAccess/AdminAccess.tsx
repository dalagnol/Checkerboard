import React, { useState, useContext } from "react";
import { UserContext } from "controllers";
import { IUser } from "interfaces/user";
import { useLocale } from "locale";
import { dictionary } from "../json";

import { Radio, Button } from "components";
import { Main, Title, Subheader, Radios, Label } from "./styles";

export function AdminAccess({ id }: Props) {
  const { Text } = useLocale("Profile", dictionary);
  const { users, changeType } = useContext(UserContext);

  const [user, setUser] = useState<IUser>(users.find(user => user.id === id)!);

  return (
    <Main>
      <Title>{user.name}</Title>
      <Subheader>{user.email}</Subheader>
      <Radios>
        <div>
          <Radio
            name={"type"}
            defaultChecked={!user?.type}
            onChange={() => setUser({ ...user, type: 0 })}
          />
          <Label>
            <Text>Administrator</Text>
          </Label>
        </div>
        <div>
          <Radio
            name={"type"}
            defaultChecked={!!user?.type}
            onChange={() => setUser({ ...user, type: 1 })}
          />
          <Label>
            <Text>Common</Text>
          </Label>
        </div>
      </Radios>
      <Button onClick={() => changeType(user.id, user.type)}>
        <Text>Save</Text>
      </Button>
    </Main>
  );
}

interface Props {
  id: number;
}
