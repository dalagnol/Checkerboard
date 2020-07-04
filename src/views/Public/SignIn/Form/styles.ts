import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Form = styled.form`
    width: 290px;
    height: 370px;

    background-color ${({ theme }) => theme.signin?.backgroundColor};

    border-radius: 20px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const Label = styled.label<Props>`
  font-size: 1.1em;
  font-family: Montserrat;
  
  color ${({ theme }) => theme.signin?.color};

  width: 100%;

  ${({ error }) =>
    error &&
    `  animation: 0.9s shake;
  `}
`;

export const Link = styled.p`
  cursor: pointer;

  font-family: Montserrat Light;
  font-size: 1.1em;

  color: ${({ theme }) => theme.signin?.link};

  text-decoration: underline;

  margin: 5px;
`;
