import { SInput, SInputContainer } from "./styles"

export const Input = ({ label, id } = { label: false }) => {
    return (
        <SInputContainer>
            {label && <label children={label} htmlFor={id} className="input-label" />}
            <SInput />
        </SInputContainer>
    );
};