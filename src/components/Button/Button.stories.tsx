import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
    title: 'ReactComponentLibrary/Button',
    component: Button,
} as ComponentMeta<typeof Button> ;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
    children: <h1>Hello World</h1>,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    children: 'Click Me',
};
