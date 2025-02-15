import { FloatingButton } from "@repo/ui/floating-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "FloatingButton",
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FloatingButton {...args} />,
};
