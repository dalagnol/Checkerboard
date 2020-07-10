import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Input as Element } from "./styles";

interface Props {
  type: string;
  name: string;
  value?: string;
  onChange: any;
  onKeyDown?: any;
  error?: boolean;
  onBlur?: any;
  autoFocus?: boolean;
}

export function Input(props: Props) {
  useTheme("Input", themejson);
  return <Element {...props} autoComplete={"off"} />;
}
