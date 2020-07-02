import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Button as Element } from "./styles";

interface Props {
  children: any;
  onClick: any;
}

export function Button({ children, onClick }: Props) {
  useTheme("Button", themejson);

  return <Element onClick={onClick}>{children}</Element>;
}
