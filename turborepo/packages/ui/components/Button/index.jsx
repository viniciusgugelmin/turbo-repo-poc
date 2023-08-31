import { S } from "./styles";

export const Button = ({ label = "Boop" }) => {
  return <S.Button>{label}</S.Button>;
};