import React, { useContext, useMemo } from "react";
import { CheckerContext } from "controllers";

import { Grid as Element } from "./styles";
import { Tile, Shuffle, Invert } from "components";

export function Checkerboard() {
  const { grid } = useContext(CheckerContext);

  return (
    <Element>
      {useMemo(() => {
        return grid.map((row, i) =>
          row.map((bit, j) => <Tile row={i} column={j} key={`${i}${j}`} />)
        );
      }, [grid])}
      <Shuffle />
      <Invert />
    </Element>
  );
}
