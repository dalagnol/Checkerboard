import styled from "styled-components";

export const Button = styled.button`
    border: none;

    cursor: pointer;

    width: 100%;
    height: 60px;

    margin: 15px 0;

    border-radius: 30px;

    font-size: 1.35em;
    font-family: Montserrat;

    background-color ${({ theme }) => theme.button?.backgroundColor};
    color: white;

    box-shadow: 0 0 10px ${({ theme }) => theme.button?.boxShadow};

    &:active {
       background-color: white;
       color: ${({ theme }) => theme.button?.backgroundColor}
    }
    
    &:hover {
       box-shadow: 0 0 10px ${({ theme }) => theme.button?.hover};
    }
`;
