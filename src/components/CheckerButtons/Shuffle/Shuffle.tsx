import React, { useContext } from "react";
import { CheckerContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Shuffle as Element } from "./styles";

export function Shuffle() {
  const { grid, shuffle } = useContext(CheckerContext);
  useTheme("Shuffle", themejson);

  return <Element onClick={() => shuffle()} checked={grid[0][0]} />;
}
