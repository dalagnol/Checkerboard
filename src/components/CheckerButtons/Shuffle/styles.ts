import styled from "styled-components";
import { Random } from "@styled-icons/fa-solid/Random";

interface Props {
  checked: number;
}

export const Shuffle = styled(Random)<Props>`
  cursor: pointer;

  height: 30px;
  width: 30px;

  margin: 2px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  color: ${({ checked }) => (checked ? `white` : `black`)};
`;
