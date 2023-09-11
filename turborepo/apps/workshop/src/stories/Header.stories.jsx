import { Header } from 'ui'

const meta = {
    component: Header,
};

export default meta

const HeaderComponent = (props) => {
    return <Header {...props} primary children="Header" />
}

HeaderComponent.parameters = { pseudo: { hover: true } }

export const Primary = {
    render: HeaderComponent,
}