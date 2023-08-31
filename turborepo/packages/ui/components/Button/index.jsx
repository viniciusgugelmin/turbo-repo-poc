import { S } from "./styles";

const CLASS = "ui__button"

export const Button = ({ label = "Boop" }) => {
  return <S.Button className={CLASS}>{label}</S.Button>;
};