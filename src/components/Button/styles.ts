import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;
  transition: 0.6s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    color: whitesmoke;
    cursor: default;
    background-color: rgb(145 145 145);
    opacity: 1;
  }
`;
