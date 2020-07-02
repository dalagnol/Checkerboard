import React from "react";
import { useTheme } from "theme";
import { themejson } from "./json";

import { Radio as Element, Span, Container } from "./styles";

interface Props {
  value: string;
  name: string;
  defaultChecked: boolean;
  onChange: any;
}

export function Radio({ value, name, defaultChecked, onChange }: Props) {
  useTheme("Radio", themejson);
  return (
    <Container>
      <Element
        type={"radio"}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <Span />
    </Container>
  );
}
