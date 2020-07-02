import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.landing?.bottomGradient},
    ${({ theme }) => theme.landing?.upperGradient}
  );

  position: absolute;
`;

export const Title = styled.h1`
  font-family: Montserrat Light;
  font-size: 2em;

  color: white;

  text-align: center;
`;
