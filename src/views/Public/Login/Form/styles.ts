import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Form = styled.form`
    width: 290px;
    height: 370px;

    background-color ${({ theme }) => theme.login?.backgroundColor};

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
  
  color ${({ theme }) => theme.login?.color};

  width: 100%;

  ${({ error }) =>
    error &&
    `  animation: 0.9s shake;
  `}
`;
