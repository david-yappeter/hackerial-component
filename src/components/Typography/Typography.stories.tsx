import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
    title: 'ReactComponentLibrary/Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}/>

export const TypographyStringChildren = Template.bind({});
TypographyStringChildren.args = {
    variant: 'body1',
    as: 'p',
    children: 'Lorem Ipsum',
};

export const TypographyHTMLChildren = Template.bind({});
TypographyHTMLChildren.args = {
    variant: 'body1',
    as: 'p',
    children: <Typography variant='body1' as='p'>Lorem Ipsum HTML Children</Typography>,
};
