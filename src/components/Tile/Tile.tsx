import React, { useContext } from "react";
import { CheckerContext } from "controllers";

import { Tile as Element } from "./styles";

interface Props {
  row: number;
  column: number;
}
export function Tile({ row, column }: Props) {
  const { grid, toggle } = useContext(CheckerContext);

  return (
    <Element
      onClick={() => toggle(row, column)}
      row={row}
      column={column}
      checked={grid[row][column]}
    />
  );
}
