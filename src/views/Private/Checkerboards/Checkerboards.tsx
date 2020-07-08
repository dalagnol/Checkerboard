import React, { useContext, useMemo } from "react";
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
  Checkerboards as Element,
  Header,
  CheckerTile,
  Delete,
} from "./styles";

export function Checkerboards() {
  const { grids, removeGrid } = useContext(UserContext);
  const { Text } = useLocale("Checkerboards", dictionary);
  useTheme("Checkerboards", themejson);

  const { push } = useHistory();

  const checkerboardsList = useMemo(
    () =>
      grids.map((x) => (
        <CheckerTile key={x.id}>
          <Header onClick={() => push(grid(x.id))}>{x.name}</Header>
          <Delete onClick={() => removeGrid(x.id)} />
        </CheckerTile>
      )),
    [grids, push, removeGrid]
  );

  return (
    <Container>
      <Main>
        <Title>
          <Text>Checkerboards</Text>
        </Title>
        <Element>
          {!checkerboardsList.length ? (
            <Header>
              <Text>There are no checkerboards</Text>
            </Header>
          ) : (
            checkerboardsList
          )}
        </Element>
      </Main>
    </Container>
  );
}
