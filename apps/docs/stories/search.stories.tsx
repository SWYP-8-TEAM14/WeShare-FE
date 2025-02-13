import { Search } from "@repo/ui/search";
import type { Meta, StoryObj } from "@storybook/react";

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

export const Clearable: Story = {
  render: () => (
    <div className="relative">
      <Search className="pr-9" />
      <button
        className="absolute right-[9px] top-1/2 -translate-y-1/2"
        aria-label="Clear"
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="9" fill="#757575" />
          <path
            d="M16.1207 9.71072C16.6264 9.20499 16.6264 8.38503 16.1207 7.8793C15.615 7.37357 14.795 7.37357 14.2893 7.8793L12 10.1686L9.71072 7.8793C9.20499 7.37357 8.38503 7.37357 7.8793 7.8793C7.37357 8.38503 7.37357 9.20499 7.8793 9.71072L10.1686 12L7.8793 14.2893C7.37357 14.795 7.37357 15.615 7.8793 16.1207C8.38503 16.6264 9.20499 16.6264 9.71072 16.1207L12 13.8314L14.2893 16.1207C14.795 16.6264 15.615 16.6264 16.1207 16.1207C16.6264 15.615 16.6264 14.795 16.1207 14.2893L13.8314 12L16.1207 9.71072Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  ),
};
