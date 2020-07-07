import styled from "styled-components";

export const Radio = styled.input`
  position: absolute;
  opacity: 0;

  cursor: pointer;

  height: 0;
  width: 0;
`;

export const Span = styled.span`
  position: absolute;

  top: 0;
  left: 0;

  height: 20px;
  width: 20px;

  background-color ${({ theme }) => theme.radio?.backgroundColor};
  border-radius: 50%;

  &:hover {
    background-color ${({ theme }) => theme.radio?.hover};
  }

  ${Radio}:checked + & {
    background-color ${({ theme }) => theme.radio?.checked};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Radio}:checked + &:after {
    display: block;
  }

  &:after {
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }
`;

export const Container = styled.label`
  display: block;

  position: relative;

  padding-left: 28px;
  margin-bottom: 12px;

  cursor: pointer;

  font-size: 22px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
