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
    label: "Hello World",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click Me",
};
