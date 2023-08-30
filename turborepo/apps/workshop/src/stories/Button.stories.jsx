// Button.stories.ts|tsx
import { Button } from 'ui';

const meta = {
    component: Button,
};

export default meta;

export const Primary = {
    render: () => <Button primary label="Button" />,
}