import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RecommendSwiper from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecule/RecommendSwiper",
  component: RecommendSwiper,
} as ComponentMeta<typeof RecommendSwiper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RecommendSwiper> = (args) => (
  <RecommendSwiper {...args} />
);

export const Recommend = Template.bind({});
Recommend.args = {
  items: [
    { imageUrl: "/image/ranking1.png", price: 10000, href: "#" },
    { imageUrl: "/image/ranking1.png", price: 11000, href: "#" },
    { imageUrl: "/image/ranking1.png", price: 12000, href: "#" },
    { imageUrl: "/image/ranking1.png", price: 13000, href: "#" },
    { imageUrl: "/image/ranking1.png", price: 14000, href: "#" },
  ],
};
