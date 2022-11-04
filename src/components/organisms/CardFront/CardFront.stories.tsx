import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardFront from './CardFront';

export default {
    title: 'Card/Organisms/CardFront',
    component: CardFront,
} as ComponentMeta<typeof CardFront>;

const Template: ComponentStory<typeof CardFront> = (args) => (
    <>
        <CardFront {...args} />
    </>
);

export const Default = Template.bind({});
