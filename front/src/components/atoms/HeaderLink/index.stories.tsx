import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderLink from ".";
import { MemoryRouter } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/HeaderLink",
  component: HeaderLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof HeaderLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderLink> = (args) => (
  <HeaderLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: "コレクション",
  href: "#",
};
