import styled from "styled-components";
import { Sun, Moon, Globe, Home, User, LogOut } from "@styled-icons/feather";
import { ChessBoard } from "@styled-icons/fa-solid/ChessBoard";

interface Props {
  selected: boolean;
}

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.aside`
  width: 60px;
  height: 100%;

  background-color: ${({ theme }) => theme.sidebar?.backgroundColor};

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1000;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 60px;

    flex-direction: row;

    justify-content: space-evenly;
  }
`;

export const Light = styled(Sun)`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: #ffd561;
`;

export const Dark = styled(Moon)`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: #ffd561;
`;

export const Language = styled(Globe)`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: #ffd561;
`;

export const Main = styled(Home)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ selected }) => (selected ? `white` : `#FFD561`)};
`;

export const Checkerboard = styled(ChessBoard)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ selected }) => (selected ? `white` : `#FFD561`)};
`;

export const Profile = styled(User)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ selected }) => (selected ? `white` : `#FFD561`)};
`;

export const Logout = styled(LogOut)`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: #ffd561;
`;
