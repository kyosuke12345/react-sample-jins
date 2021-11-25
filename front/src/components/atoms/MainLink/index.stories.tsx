import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLink from ".";
import { MemoryRouter } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/MainLink",
  component: MainLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof MainLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainLink> = (args) => (
  <MainLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: "WEBでメガネをもっと簡単に",
  href: "#",
};
