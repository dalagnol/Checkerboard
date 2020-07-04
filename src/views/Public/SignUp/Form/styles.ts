import styled from "styled-components";
import { Check } from "@styled-icons/feather/Check";

interface Props {
  error?: boolean;
  modal?: boolean;
}

export const Form = styled.form<Props>`
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

    ${({ modal }) =>
      modal &&
      `
      width: 300px;
      height: 300px;
    `}
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

export const Link = styled.h1`
  cursor: pointer;

  font-family: Montserrat Light;
  font-size: 1.1em;

  color: ${({ theme }) => theme.signup?.link};

  text-decoration: underline;

  margin: 5px;
`;

export const Modal = styled.div`
  z-index: 10000000000;

  width: 70%;
  height: 50%;

  background-color ${({ theme }) => theme.signup?.backgroundColor};

  box-shadow: 0 0 10px #00000044;
`;

export const ModalText = styled.h1`
  color ${({ theme }) => theme.signup?.color};

  font-size: 1.1em;
  font-family: Montserrat;

  text-align: center;
`;
