import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendBox from './SendBox';

export default {
    title: 'Card/Organisms/SendBox',
    component: SendBox,
} as ComponentMeta<typeof SendBox>;

const Template: ComponentStory<typeof SendBox> = (args) => (
    <>
        <SendBox {...args} />
    </>
);

export const Default = Template.bind({});
