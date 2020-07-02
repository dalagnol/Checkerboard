import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Input as Element } from "./styles";

export function Input({ type, name, value, onChange }: Props) {
  useTheme("Input", themejson);
  return (
    <Element
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={"off"}
    />
  );
}

interface Props {
  type: string;
  name: string;
  value?: string;
  onChange: any;
}
