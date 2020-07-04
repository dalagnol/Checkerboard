import styled from "styled-components";
import { Check } from "@styled-icons/feather/Check";

interface Props {
  error?: boolean;
}

export const Form = styled.form`
    width: 290px;
    height: 520px;

    background-color ${({ theme }) => theme.signup?.backgroundColor};

    border-radius: 20px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;

    @media only screen and (max-width: 600px) {
      margin-top: 70px;
    }
`;

export const Label = styled.label<Props>`
  font-size: 1.1em;
  font-family: Montserrat;
  
  color ${({ theme }) => theme.signup?.color};

  width: 100%;

  ${({ error }) =>
    error &&
    `  animation: 0.9s shake;
  `}
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

export const Link = styled.p`
  cursor: pointer;

  font-family: Montserrat Light;
  font-size: 1.1em;

  color: ${({ theme }) => theme.signup?.link};

  text-decoration: underline;

  margin: 5px;
`;
