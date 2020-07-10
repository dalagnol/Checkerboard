import styled from "styled-components";
import { Loader } from "@styled-icons/feather/Loader";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.loader?.bottomGradient},
    ${({ theme }) => theme.loader?.upperGradient}
  );

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const Load = styled(Loader)`
  height: 60px;
  width: 60px;

  animation: spin 1s infinite;

  color: ${({ theme }) => theme.loader?.color};
`;
