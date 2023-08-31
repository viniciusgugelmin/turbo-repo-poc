import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 2px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background: red;
  }
`;

const S = { Button };

export { S };
