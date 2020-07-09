import styled from "styled-components";
import { Shuffle } from "@styled-icons/feather/Shuffle";

interface Props {
  checked: number;
}

export const ShuffleIcon = styled(Shuffle)<Props>`
  cursor: pointer;

  height: 30px;
  width: 30px;

  margin: 2px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  color: ${({ checked, theme }) =>
    checked ? theme.tile?.unchecked : theme.tile?.checked};
`;
