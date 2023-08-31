import { Input } from 'ui'

const meta = {
    component: Input,
};

export default meta

const InputComponent = (props) => {
    return <Input {...props} primary label="Input" />
}

InputComponent.parameters = { pseudo: { hover: true } }

export const Primary = {
    render: InputComponent,
}