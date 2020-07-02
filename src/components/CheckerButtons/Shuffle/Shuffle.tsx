import React, { useContext } from "react";
import { CheckerContext } from "controllers";

import { Shuffle as Element } from "./styles";

export function Shuffle() {
  const { grid, shuffle } = useContext(CheckerContext);

  return <Element onClick={() => shuffle()} checked={grid[0][0]} />;
}
