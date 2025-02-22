import { Chip } from "@repo/ui/chip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Chip",
  component: Chip,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Text Label",
    variant: "primary",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Chip {...args} />,
};

export const Variants: Story = {
  render: () => (
    <div className="space-x-4 p-4">
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="tertiary">Tertiary</Chip>
    </div>
  ),
};
