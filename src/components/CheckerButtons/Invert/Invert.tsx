import React, { useContext } from "react";
import { CheckerboardContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Invert as Element } from "./styles";

export function Invert() {
  const { grid, invert } = useContext(CheckerboardContext);
  useTheme("Invert", themejson);

  return <Element onClick={() => invert()} checked={grid[0][1]} />;
}
