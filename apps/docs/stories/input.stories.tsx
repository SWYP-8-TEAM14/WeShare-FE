import { Description, ErrorMessage, InputLength } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    placeholder: "텍스트를 입력해 주세요",
    type: "text",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => <Input {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <Label htmlFor="input">라벨</Label>
        <InputLength maxLength={100} currentLength={0} />
      </div>
      <Input {...args} id="input" />
      <Description>설명입니다</Description>
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <Label htmlFor="input">라벨</Label>
        <InputLength maxLength={50} currentLength={4} />
      </div>
      <Input id="input" type="email" value="abcd" />
      <ErrorMessage>
        이메일 형식에 맞지 않습니다. 다시 입력해 주세요.
      </ErrorMessage>
    </div>
  ),
};
