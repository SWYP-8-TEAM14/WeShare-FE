import { Search } from "@repo/ui/search";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Example/Search",
  component: Search,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    placeholder: "검색어를 입력해 주세요",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => <Search {...args} />,
};
const ClearableSearch = () => {
  const [value, setValue] = useState("");

  return (
    <Search
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
    />
  );
};

export const Clearable: Story = {
  render: () => <ClearableSearch />,
};
