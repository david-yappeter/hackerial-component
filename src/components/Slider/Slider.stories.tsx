import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
    title: 'ReactComponentLibrary/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args}/>

export const SliderStory = Template.bind({});
SliderStory.args = {
    min: '1',
    max: '10',
    step: '1',
}
