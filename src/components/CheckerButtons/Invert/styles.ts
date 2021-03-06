import styled from "styled-components";
import { Droplet } from "@styled-icons/feather/Droplet";

interface Props {
  checked: number;
}

export const Invert = styled(Droplet)<Props>`
  cursor: pointer;

  height: 30px;
  width: 30px;

  margin: 2px;

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  color: ${({ checked, theme }) =>
    checked ? theme.tile?.unchecked : theme.tile?.checked};
`;
