import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.signin?.bottomGradient},
    ${({ theme }) => theme.signin?.upperGradient}
  );

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
`;