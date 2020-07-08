import React, { useContext } from "react";
import { CheckerboardContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Shuffle as Element } from "./styles";

export function Shuffle() {
  const { grid, shuffle } = useContext(CheckerboardContext);
  useTheme("Shuffle", themejson);

  return <Element onClick={() => shuffle()} checked={grid[0][0]} />;
}
