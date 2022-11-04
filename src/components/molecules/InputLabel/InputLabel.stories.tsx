import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputLabel from './InputLabel';

export default {
    title: 'Card/Molecules/InputLabel',
    component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => (
    <>
        <InputLabel {...args} />
    </>
);

export const Default = Template.bind({});
