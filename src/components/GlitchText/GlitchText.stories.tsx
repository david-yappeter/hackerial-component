import  { ComponentStory, ComponentMeta } from "@storybook/react";
import GlitchText from "./GlitchText";

export default {
    title: 'ReactComponentLibrary/GlitchText',
    component: GlitchText,
} as ComponentMeta<typeof GlitchText>;

const Template: ComponentStory<typeof GlitchText> = (args) => <GlitchText  {...args}/>;

export const Text = Template.bind({});
Text.args = {
    text: 'Glitch',
    type: 1,
    fontSize: null,
}
