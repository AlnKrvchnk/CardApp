import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputFormBottomDate from './InputFormBottomDate';

export default {
    title: 'Card/Molecules/InputFormBottomDate',
    component: InputFormBottomDate,
} as ComponentMeta<typeof InputFormBottomDate>;

const Template: ComponentStory<typeof InputFormBottomDate> = (args) => (
    <>
        <InputFormBottomDate {...args} />
    </>
);

export const Default = Template.bind({});
