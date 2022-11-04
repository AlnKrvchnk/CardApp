import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardBack from './CardBack';

export default {
    title: 'Card/Organisms/CardBack',
    component: CardBack,
} as ComponentMeta<typeof CardBack>;

const Template: ComponentStory<typeof CardBack> = (args) => (
    <>
        <CardBack {...args} />
    </>
);

export const Default = Template.bind({});
