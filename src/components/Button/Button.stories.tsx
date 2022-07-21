import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
    title: 'ReactComponentLibrary/Button',
    component: Button,
} as ComponentMeta<typeof Button> ;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HTMLChildren  = Template.bind({});
HTMLChildren.args = {
    children: <h1>Hello World</h1>,
    variant: 'border',
    color: 'primary',
    uppercase: false,
    size: 'small',
};

export const StringChildren = Template.bind({});
StringChildren.args = {
    children: 'Hello World',
    variant: 'border',
    color: 'primary',
    uppercase: false,
    size: 'small',
};
