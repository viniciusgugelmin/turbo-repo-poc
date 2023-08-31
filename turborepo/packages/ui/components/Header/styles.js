import { styled } from "styled-components"

const Header = styled.header`
  color: black;
  height: 64px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  background: white;
  box-shadow: 0 2px 3px rgba(0,0,0,.2);
  border-bottom: 1px solid rgba(0,0,0,.3);
`;

const S = { Header };

export { S };
