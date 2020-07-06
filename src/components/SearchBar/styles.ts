import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";

export const Container = styled.div`
  display: flex;

  width: 100%;

  position: relative;
`;

export const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;

  position: absolute;

  right: 10px;
  top: 30px;
`;
