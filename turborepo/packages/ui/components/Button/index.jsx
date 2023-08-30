import { SButton } from "./styles"

export const Button = ({
    label = "Boop",
}) => {
    return (
        <SButton>
            {label}
        </SButton>
    );
};