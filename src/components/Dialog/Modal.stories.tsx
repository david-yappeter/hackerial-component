import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dialog from "./index";


export default {
    title: 'ReactComponentLibrary/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog> ;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const HTMLChildren  = Template.bind({});
HTMLChildren.args = {
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget sapien turpis. Suspendisse vehicula libero quis pellentesque imperdiet. Nullam non convallis risus. Sed quis enim vestibulum, tristique turpis sit amet, fringilla velit. Nullam faucibus tortor ac felis posuere ultrices.</p>,
    isOpen: true,
    handleClose: () => {},
};
