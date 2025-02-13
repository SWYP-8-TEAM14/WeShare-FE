import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Button",
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const allVariants = ["primary", "secondary", "tertiary"] as const;
const allSizes = ["large", "medium", "small"] as const;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const All: Story = {
  render: () => (
    <div>
      {allVariants.map((variant) => (
        <div key={variant} className="">
          <h2 className="text-heading-1 font-bold mt-4">{variant}</h2>
          <div className="flex gap-4 mt-2">
            {allSizes.map((size) => (
              <div key={size} className="">
                <h3 className="text-heading-3 font-bold">{size}</h3>
                <Button variant={variant} size={size}>
                  Button
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <Button {...args} />,
  args: {
    disabled: true,
  },
};
