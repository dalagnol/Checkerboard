import styled from "styled-components";

export const Grid = styled.main`
  width: 100vw;
  height: 100vh;

  margin-left: 60px;

  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);

  overflow: hidden;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(15, 1fr);

    margin-left: 0;
    margin-top: 60px;
  }
`;
