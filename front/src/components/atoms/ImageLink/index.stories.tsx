import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageLink from ".";
import { MemoryRouter } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/ImageLink",
  component: ImageLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ImageLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageLink> = (args) => (
  <ImageLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: "Combination Slim AirFrame",
  url: "/image/link_image_small.png",
  href: "#",
};
