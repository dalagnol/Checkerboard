import styled from "styled-components";

export const Grid = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(15, 1fr);
  }
`;
