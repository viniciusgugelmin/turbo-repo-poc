import { S } from "./styles";

export const Input = ({ label, id, props } = { label: false }) => {
    return (
        <S.InputContainer>
            {label && <label children={label} htmlFor={id} className="input-label" />}
            <S.Input {...props} />
        </S.InputContainer>
    );
};