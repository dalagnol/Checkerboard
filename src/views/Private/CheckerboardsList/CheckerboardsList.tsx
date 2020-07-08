import React, { useState, useContext, useMemo } from "react";
import { UserContext } from "controllers";
import { useTheme } from "theme";
import { useLocale } from "locale";
import { themejson, dictionary } from "./json";
import { grid } from "routes/paths";
import { useHistory } from "react-router-dom";

import {
  Container,
  Main,
  Title,
  Checkerboards,
  Header,
  CheckerTile,
  Delete,
  Add,
} from "./styles";
import { Input, Button } from "components";

export function CheckerboardsList() {
  const [newGridName, setNewGridName] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [creating, setCreating] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { grids, createGrid, removeGrid } = useContext(UserContext);
  const { Text } = useLocale("Checkerboards", dictionary);
  useTheme("Checkerboards", themejson);

  const { push } = useHistory();

  const checkerboardsList = useMemo(
    () =>
      grids.map((x) => (
        <CheckerTile key={x.id} onDoubleClick={() => setEditing(true)}>
          <Header onClick={() => push(grid(x.id))}>{x.name}</Header>
          {x.id !== 0 && <Delete onClick={() => removeGrid(x.id)} />}
        </CheckerTile>
      )),
    [grids, push, removeGrid]
  );

  const create = () => {
    try {
      createGrid(newGridName);
      setCreating(false);
    } catch ({ message }) {
      if (message.includes("name")) {
        setError(true);
      }
    }
  };

  return (
    <Container>
      <Main>
        <Title>
          <Text>Checkerboards List</Text>
        </Title>
        <Add onClick={() => setCreating(true)} />
        <Checkerboards>
          {creating && (
            <div>
              <Input
                type={"text"}
                name={"name"}
                onChange={(e: any) => setNewGridName(e.target.value)}
              />
              <Button onClick={create}>Save</Button>
            </div>
          )}
          {!checkerboardsList.length && !creating ? (
            <Header>
              <Text>There are no checkerboards</Text>
            </Header>
          ) : (
            checkerboardsList
          )}
        </Checkerboards>
      </Main>
    </Container>
  );
}
