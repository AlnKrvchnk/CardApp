import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputForm from './InputForm';

export default {
    title: 'Card/Organisms/InputForm',
    component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
    <>
        <InputForm {...args} />
    </>
);

export const Default = Template.bind({});
