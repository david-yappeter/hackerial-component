import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dialog from "./index";


export default {
    title: 'ReactComponentLibrary/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog> ;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const HTMLChildren  = Template.bind({});
HTMLChildren.args = {
    children: <h1>Hello World</h1>,
    isOpen: true,
    handleClose: () => {},
};
