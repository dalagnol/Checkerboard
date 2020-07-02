import styled from "styled-components";

export const Input = styled.input`
  border: none;

  cursor: pointer;

  width: 100%;
  height: 60px;

  margin: 15px 0;
  padding: 0 5px;

  font-size: 1.1em;

  background-color ${({ theme }) => theme.input?.backgroundColor};
  color ${({ theme }) => theme.input?.color};

  box-shadow: 0 0 10px ${({ theme }) => theme.input?.boxShadow};

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.input?.hover};
  }

  &:focus {
    background-color: ${({ theme }) => theme.input?.focus};
  }
`;
