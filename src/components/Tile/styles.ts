import styled from "styled-components";

interface Props {
  row: number;
  column: number;
  checked: number;
}

export const Tile = styled.div<Props>`
  cursor: pointer;

  transition: all 0.4s ease-in-out;

  grid-column-start: ${({ column }) => column + 1};
  grid-column-end: ${({ column }) => column + 2};
  grid-row-start: ${({ row }) => row + 1};
  grid-row-end: ${({ row }) => row + 2};

  background-color: ${({ checked }) => (checked ? "black" : "white")};
`;
