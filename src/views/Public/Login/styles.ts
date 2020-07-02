import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.login?.bottomGradient},
    ${({ theme }) => theme.login?.upperGradient}
  );

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
`;
