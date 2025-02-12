import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/TopNavigation",
  component: TopNavigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <TopNavigation {...args}>
      <TopNavigationLeft>Left</TopNavigationLeft>
      <TopNavigationTitle>Title</TopNavigationTitle>
      <TopNavigationRight>Right</TopNavigationRight>
    </TopNavigation>
  ),
};
