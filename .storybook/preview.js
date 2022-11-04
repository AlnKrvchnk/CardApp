import { addDecorator } from '@storybook/react';
import CardGS from '../src/Card/globalStyles';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator((story) => (
    <>
        <CardGS />
        {story()}
    </>
));
