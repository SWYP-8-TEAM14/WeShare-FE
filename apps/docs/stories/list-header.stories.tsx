import {
  ListHeader,
  ListHeaderAction,
  ListHeaderTitle,
} from "@repo/ui/list-header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ListHeader",
  component: ListHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ListHeader {...args}>
      <ListHeaderTitle>Header Title</ListHeaderTitle>
      <ListHeaderAction>Header Action</ListHeaderAction>
    </ListHeader>
  ),
};
