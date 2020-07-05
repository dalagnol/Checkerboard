import styled from "styled-components";
import { Trash } from "@styled-icons/feather";

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
  overflow: hidden;

  width: 400px;
  height: 500px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.users?.backgroundColor};
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 1.8em;

  color: ${({ theme }) => theme.users?.color};
`;

export const Users = styled.div`
  display: flex;
  flex-direction: column;

  overflow: scroll;

  width: 100%;
  height: 90%;

  align-items: center;
`;

export const UserTile = styled.div`
  cursor: pointer;

  display: flex;

  justify-content: space-between;

  width: 100%;
  height: 65px;

  background-color: ${({ theme }) => theme.users?.backgroundColor};

  border-bottom: 1px dashed ${({ theme }) => theme.users?.hover};

  &:hover {
    background-color: ${({ theme }) => `${theme.users?.hover}44`};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.h1`
  font-family: Montserrat Light;
  font-size: 1em;

  color: ${({ theme }) => theme.users?.color};

  margin: 10px 0 5px 10px;
`;

export const Subheader = styled.h1`
  font-family: Montserrat Light;
  font-size: 0.8em;

  color: ${({ theme }) => theme.users?.secondary};

  margin: 3px 0 6px 13px;
`;

export const Delete = styled(Trash)`
  cursor: pointer;

  height: 25px;
  width: 25px;

  margin: 20px;

  color: ${({ theme }) => theme.users?.secondary};

  text-shadow: 0 0 10px ${({ theme }) => theme.users?.secondary};

  &:hover {
    color: ${({ theme }) => theme.users?.color};
  }
`;
