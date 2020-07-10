import styled from "styled-components";
import {
  Sun,
  Moon,
  Globe,
  Home,
  User,
  LogOut,
  Users,
} from "@styled-icons/feather";
import { ChessBoard } from "@styled-icons/fa-solid/ChessBoard";

interface Props {
  selected?: boolean;
  dull?: boolean;
}

export const Sidebar = styled.aside<Props>`
  width: 60px;
  height: 100%;

  background-color: ${({ theme, dull }) =>
    dull ? theme.sidebar?.dullBackgroundColor : theme.sidebar?.backgroundColor};

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1000;

  box-shadow: 0 0 20px #00000066;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 60px;

    flex-direction: row;

    justify-content: space-evenly;

    overflow: scroll;
  }
`;

export const Light = styled(Sun)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, dull }) =>
    dull ? theme.sidebar?.dullColor : theme.sidebar?.color};
`;

export const Dark = styled(Moon)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, dull }) =>
    dull ? theme.sidebar?.dullColor : theme.sidebar?.color};
`;

export const Language = styled(Globe)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, dull }) =>
    dull ? theme.sidebar?.dullColor : theme.sidebar?.color};
`;

export const Main = styled(Home)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, selected, dull }) =>
    selected
      ? `white`
      : dull
      ? theme.sidebar?.dullColor
      : theme.sidebar?.color};
`;

export const Checkerboard = styled(ChessBoard)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, selected, dull }) =>
    selected
      ? `white`
      : dull
      ? theme.sidebar?.dullColor
      : theme.sidebar?.color};
`;

export const Profile = styled(User)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, selected, dull }) =>
    selected
      ? `white`
      : dull
      ? theme.sidebar?.dullColor
      : theme.sidebar?.color};
`;

export const UsersManagement = styled(Users)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, selected, dull }) =>
    selected
      ? `white`
      : dull
      ? theme.sidebar?.dullColor
      : theme.sidebar?.color};
`;

export const Logout = styled(LogOut)<Props>`
  cursor: pointer;

  width: 40px;
  height: 40px;

  margin: 10px;

  color: ${({ theme, dull }) =>
    dull ? theme.sidebar?.dullColor : theme.sidebar?.color};
`;
