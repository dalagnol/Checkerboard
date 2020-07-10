import React, { useContext } from "react";
import { CheckerboardContext } from "controllers";
import { useTheme } from "theme";
import { themejson } from "./json";

import { ShuffleIcon } from "./styles";

export function Shuffle() {
  const { grid, shuffle } = useContext(CheckerboardContext);
  useTheme("Shuffle", themejson);

  return <ShuffleIcon onClick={() => shuffle()} checked={grid[0][0]} />;
}
