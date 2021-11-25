import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainTitle from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/MainTitle",
  component: MainTitle,
} as ComponentMeta<typeof MainTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainTitle> = (args) => (
  <MainTitle {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: "特集",
  titleE: "FEAUTRE",
};
