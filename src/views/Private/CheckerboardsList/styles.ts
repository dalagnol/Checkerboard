import styled from "styled-components";
import { Trash, Plus } from "@styled-icons/feather";

interface Props {
  error: boolean;
}

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.checkerboards?.bottomGradient},
    ${({ theme }) => theme.checkerboards?.upperGradient}
  );

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const Main = styled.main`
  overflow: hidden;

  width: 320px;
  height: 500px;

  border-radius: 20px;

  padding: 15px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.checkerboards?.backgroundColor};
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 1.8em;

  color: ${({ theme }) => theme.checkerboards?.color};

  text-align: center;

  width: 80%;
`;

export const Checkerboards = styled.div`
  display: flex;
  flex-direction: column;

  overflow: scroll;

  width: 100%;
  height: 90%;

  align-items: center;
`;

export const CheckerTile = styled.div`
  cursor: pointer;

  display: flex;

  justify-content: space-between;

  width: 100%;
  height: 65px;

  background-color: ${({ theme }) => theme.checkerboards?.backgroundColor};

  border-bottom: 1px dashed ${({ theme }) => theme.checkerboards?.hover};

  &:hover {
    background-color: ${({ theme }) => `${theme.checkerboards?.hover}44`};
  }
`;

export const Header = styled.h1`
  font-family: Montserrat Light;
  font-size: 1.2em;

  color: ${({ theme }) => theme.checkerboards?.color};

  margin: 20px;
`;

export const Delete = styled(Trash)`
  cursor: pointer;

  height: 25px;
  width: 25px;

  margin: 20px;

  color: ${({ theme }) => theme.checkerboards?.secondary};

  text-shadow: 0 0 10px ${({ theme }) => theme.checkerboards?.secondary};

  &:hover {
    color: ${({ theme }) => theme.checkerboards?.color};
  }
`;

export const Add = styled(Plus)`
  cursor: pointer;

  height: 25px;
  width: 25px;

  color: ${({ theme }) => theme.checkerboards?.secondary};

  text-shadow: 0 0 10px ${({ theme }) => theme.checkerboards?.secondary};

  &:hover {
    color: ${({ theme }) => theme.checkerboards?.color};
  }
`;

export const NameEditing = styled.input<Props>`
  cursor: pointer;

  border: none;
  border-bottom: 1px dashed ${({ theme }) => theme.checkerboards?.hover};

  height: 40px;
  width: 40%;

  font-size: 1.2em;

  background-color: ${({ theme }) => theme.checkerboards?.backgroundColor};
  color: ${({ theme }) => theme.checkerboards?.color};

  margin: 10px 15px;

  &:hover {
    background-color: ${({ theme }) => `${theme.checkerboards?.hover}44`};
  }

  ${({ error }) =>
    error &&
    `  animation: 0.9s shake;
`}
`;
