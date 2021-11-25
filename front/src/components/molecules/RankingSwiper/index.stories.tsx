import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RankingSwiper from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecule/RankingSwiper",
  component: RankingSwiper,
} as ComponentMeta<typeof RankingSwiper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RankingSwiper> = (args) => (
  <RankingSwiper {...args} />
);

export const Ranking = Template.bind({});
Ranking.args = {
  items: [
    { rank: 1, imageUrl: "/image/ranking1.png", price: 10000, href: "#" },
    { rank: 2, imageUrl: "/image/ranking1.png", price: 11000, href: "#" },
    { rank: 3, imageUrl: "/image/ranking1.png", price: 12000, href: "#" },
    { rank: 4, imageUrl: "/image/ranking1.png", price: 13000, href: "#" },
    { rank: 5, imageUrl: "/image/ranking1.png", price: 14000, href: "#" },
  ],
};
