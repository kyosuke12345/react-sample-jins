import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainScreen from ".";
import { MemoryRouter } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Screens/MainScreen",
  component: MainScreen,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof MainScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainScreen> = (args) => (
  <MainScreen {...args} />
);

export const Screen = Template.bind({});
Screen.args = {};
