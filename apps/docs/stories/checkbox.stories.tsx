import { Checkbox } from "@repo/ui/checkbox";
import { Label } from "@repo/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    size: "md",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="c1" />
      <Label htmlFor="c1">Checkbox</Label>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="c2" />
        <Label htmlFor="c2">Large</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="c3" size="sm" />
        <Label htmlFor="c3" size="sm">
          Small
        </Label>
      </div>
    </div>
  ),
};
