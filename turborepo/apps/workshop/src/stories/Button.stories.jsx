import { Button } from 'ui'

const meta = {
    component: Button,
};

export default meta

const ButtonComponent = (props) => {
    return <Button {...props} primary label="Button" />
}

ButtonComponent.parameters = { pseudo: { hover: true } }

export const Primary = {
    render: ButtonComponent,
}