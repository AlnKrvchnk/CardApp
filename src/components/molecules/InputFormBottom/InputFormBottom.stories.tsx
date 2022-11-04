import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputFormBottom from './InputFormBottom';

export default {
    title: 'Card/Molecules/InputFormBottom',
    component: InputFormBottom,
} as ComponentMeta<typeof InputFormBottom>;

const Template: ComponentStory<typeof InputFormBottom> = (args) => (
    <>
        <InputFormBottom {...args} />
    </>
);

export const Default = Template.bind({});
