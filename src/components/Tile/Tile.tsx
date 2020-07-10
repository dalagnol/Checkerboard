import React, { useContext } from "react";
import { CheckerboardContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

interface Props {
  row: number;
  column: number;
}
export function Tile({ row, column }: Props) {
  const { grid, toggle } = useContext(CheckerboardContext);
  const { contexts } = useTheme("Tile", themejson);
  const checked = grid[row][column];

  const divStyle = {
    cursor: "pointer",
    transition: "all 0.4s ease-in-out",
    gridColumnStart: column + 1,
    gridColumnEnd: column + 2,
    gridRowStart: row + 1,
    gridRowEnd: row + 2,
    backgroundColor: checked
      ? contexts.tile?.output.checked
      : contexts.tile?.output.unchecked,
  };

  return <div onClick={() => toggle(row, column)} style={divStyle} />;
}
