import React, { useContext } from "react";
import { CheckerboardContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Tile as Element } from "./styles";

interface Props {
  row: number;
  column: number;
}
export function Tile({ row, column }: Props) {
  const { grid, toggle } = useContext(CheckerboardContext);
  useTheme("Tile", themejson);

  return (
    <Element
      onClick={() => toggle(row, column)}
      row={row}
      column={column}
      checked={grid[row][column]}
    />
  );
}
