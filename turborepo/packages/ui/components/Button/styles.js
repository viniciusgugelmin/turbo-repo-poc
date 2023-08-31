import { styled } from "styled-components";

const Button = styled.button`
  background: #7f7f7f;
  border: none;
  box-shadow: 0 1px 2px rgba(0,0,0,.5);
  color: white;
  border-radius: 4px;
  padding: 2px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  height: 34px;

  :hover {
    background: #323232;
  }
`;

const S = { Button };

export { S };
