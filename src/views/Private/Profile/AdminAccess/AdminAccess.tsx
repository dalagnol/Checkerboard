import React, { useState, useContext } from "react";
import { UserContext } from "controllers";
import { IUser } from "interfaces/user";

import { Radio, Button } from "components";
import { Main, Title, Subheader, Radios, Label } from "./styles";

export function AdminAccess({ id }: Props) {
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
          <Label>Administrator</Label>
        </div>
        <div>
          <Radio
            name={"type"}
            defaultChecked={!!user?.type}
            onChange={() => setUser({ ...user, type: 1 })}
          />
          <Label>Common</Label>
        </div>
      </Radios>
      <Button onClick={() => changeType(user.id, user.type)}>Save</Button>
    </Main>
  );
}

interface Props {
  id: number;
}
