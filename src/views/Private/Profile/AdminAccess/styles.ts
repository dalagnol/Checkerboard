import styled from "styled-components";
import { Check } from "@styled-icons/feather";

export const Main = styled.main`
  overflow: hidden;

  width: 325px;
  height: 250px;

  border-radius: 20px;

  padding: 20px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.profile?.backgroundColor};
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 1.8em;

  color: ${({ theme }) => theme.profile?.color};

  margin: 10px 0 5px 0;
`;

export const Subheader = styled.h1`
  font-family: Montserrat Light;
  font-size: 1em;

  color: ${({ theme }) => theme.profile?.color};

  margin: 10px 0 5px 10px;
`;

export const Label = styled.label`
  font-size: 1.1em;
  font-family: Montserrat;
  
  color ${({ theme }) => theme.profile?.color};

  width: 100%;
`;

export const Success = styled(Check)`
  width: 30px;
  height: 30px;

  color: white;
`;

export const Radios = styled.div`
  width: 100%;

  display: flex;

  margin: 15px 0;

  div {
    width: 100%;

    display: flex;
  }
`;
