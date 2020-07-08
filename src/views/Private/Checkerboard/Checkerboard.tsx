import React, { useContext, useMemo } from "react";
import { CheckerboardContext } from "controllers";

import { Grid as Element } from "./styles";
import { Tile, Shuffle, Invert } from "components";

export function Checkerboard() {
  const { grid } = useContext(CheckerboardContext);

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
