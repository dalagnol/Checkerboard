import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.users?.bottomGradient},
    ${({ theme }) => theme.users?.upperGradient}
  );

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const Main = styled.main`
  width: 400px;
  height: 500px;

  border-radius: 20px;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.users?.backgroundColor};
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-family: 2em;
`;
