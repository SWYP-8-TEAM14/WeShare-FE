import { TextField } from "@repo/ui/text-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    placeholder: "텍스트를 입력해 주세요",
    type: "text",
    label: "label",
    maxLength: 100,
  },
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => <TextField {...args} />,
};

export const ErrorMessage: Story = {
  render: (args) => (
    <TextField
      label="이메일"
      defaultValue="abcd@"
      type="email"
      maxLength={30}
      errorMessage="이메일 형식에 맞지 않습니다. 다시 입력해 주세요."
    />
  ),
};
