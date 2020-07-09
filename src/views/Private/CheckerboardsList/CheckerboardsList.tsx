import React, { useState, useContext, useMemo, useCallback } from "react";
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
  NameEditing,
} from "./styles";
import { Input, Button } from "components";

export function CheckerboardsList() {
  const [newGridName, setNewGridName] = useState<string>("");
  const [editing, setEditing] = useState<EditingData>({
    state: false,
    id: 0,
    name: "",
    data: "",
  });
  const [creating, setCreating] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { grids, setUserGrid, createGrid, removeGrid } = useContext(
    UserContext
  );
  const { Text } = useLocale("Checkerboards", dictionary);
  useTheme("Checkerboards", themejson);

  const { push } = useHistory();

  const keyHandler = useCallback(
    (e: any) => {
      if (e.keyCode === 13) {
        setUserGrid(editing.id, editing.name, editing.data);
        setEditing({
          state: false,
          id: 0,
          name: "",
          data: "",
        });
      }
    },
    [setUserGrid, setEditing, editing]
  );

  const checkerboardsList = useMemo(
    () =>
      grids.map((x) => (
        <CheckerTile key={x.id} onClick={() => push(grid(x.id))}>
          {editing.state && editing.id === x.id ? (
            <NameEditing
              type={"text"}
              value={editing.name}
              onChange={(e: any) =>
                setEditing({ ...editing, name: e.target.value })
              }
              onClick={(e: any) => e.stopPropagation()}
              onKeyDown={keyHandler}
            />
          ) : (
            <Header
              onClick={(e: any) => e.stopPropagation()}
              onDoubleClick={() =>
                setEditing({
                  state: true,
                  id: x.id,
                  name: x.name,
                  data: x.data,
                })
              }
            >
              {x.name}
            </Header>
          )}
          {x.id !== 0 && (
            <Delete
              onClick={(e: any) => {
                e.stopPropagation();
                removeGrid(x.id);
              }}
            />
          )}
        </CheckerTile>
      )),
    [grids, push, removeGrid, editing, keyHandler]
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

interface EditingData {
  state: boolean;
  id: number;
  name: string;
  data: string;
}
