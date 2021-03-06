import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
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

  const create = useCallback(() => {
    try {
      createGrid(newGridName);
      setCreating(false);
    } catch ({ message }) {
      if (message.includes("name")) {
        setError(true);
      }
    }
  }, [createGrid, setCreating, setError, newGridName]);

  const keyHandler = useCallback(
    (e: any) => {
      if (e.keyCode === 13) {
        if (editing.state) {
          try {
            setUserGrid(editing.id, editing.name, editing.data);
            setEditing({
              state: false,
              id: 0,
              name: "",
              data: "",
            });
          } catch ({ message }) {
            if (message.includes("name")) {
              setError(true);
            }
          }
        } else {
          create();
        }
      }
    },
    [setUserGrid, setEditing, editing, create]
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
              error={error}
              onBlur={() => setEditing({ ...editing, state: false })}
              autoFocus={true}
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
    [grids, push, removeGrid, editing, keyHandler, error]
  );

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }, [error]);

  return (
    <Container>
      <Main>
        <Title>
          <Text>Checkerboards</Text>
        </Title>
        {grids.length < 5 && <Add onClick={() => setCreating(true)} />}
        <Checkerboards>
          {creating && (
            <div>
              <Input
                type={"text"}
                name={"name"}
                onChange={(e: any) => setNewGridName(e.target.value)}
                onKeyDown={keyHandler}
                error={error}
                onBlur={() => setCreating(false)}
                autoFocus={true}
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
