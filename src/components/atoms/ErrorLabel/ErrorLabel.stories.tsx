import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorLabel from './ErrorLabel';

export default {
    title: 'Card/Atoms/ErrorLabel',
    component: ErrorLabel,
} as ComponentMeta<typeof ErrorLabel>;

const Template: ComponentStory<typeof ErrorLabel> = (args) => (
    <>
        <ErrorLabel {...args} />
    </>
);

export const Default = Template.bind({});
