import React, { useContext } from "react";
import { CheckerContext } from "controllers";

import { Invert as Element } from "./styles";

export function Invert() {
  const { grid, invert } = useContext(CheckerContext);

  return <Element onClick={() => invert()} checked={grid[0][1]} />;
}
