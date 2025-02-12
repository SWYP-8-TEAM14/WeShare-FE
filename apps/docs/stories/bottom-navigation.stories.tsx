import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemTitle,
} from "@repo/ui/bottom-navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <BottomNavigation {...args}>
      <BottomNavigationItem selected>
        <BottomNavigationItemIcon>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8758 6.64939C14.8462 5.24868 16.45 4.3335 18.2642 4.3335C21.2258 4.3335 23.6267 6.77248 23.6267 9.78112C23.6267 9.85295 23.6253 9.92447 23.6226 9.99563C23.449 17.7764 13.875 21.6668 13.875 21.6668C13.875 21.6668 4.125 17.7049 4.125 9.78112C4.125 6.77248 6.52587 4.3335 9.4875 4.3335C11.3017 4.3335 12.9055 5.24868 13.8758 6.64939Z"
              fill="currentColor"
            />
          </svg>
        </BottomNavigationItemIcon>
        <BottomNavigationItemTitle>Home</BottomNavigationItemTitle>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <BottomNavigationItemIcon>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0093 7.0765C13.1494 7.27873 13.3798 7.39939 13.6258 7.39939C13.8719 7.39939 14.1022 7.27873 14.2424 7.0765C15.0805 5.8667 16.4595 5.0835 18.0142 5.0835C20.5505 5.0835 22.6267 7.17551 22.6267 9.78112C22.6267 9.84344 22.6255 9.90543 22.6232 9.96707L22.6231 9.96707L22.6228 9.97891C22.5432 13.5449 20.3076 16.2768 17.9633 18.1649C16.8005 19.1014 15.6392 19.8065 14.7672 20.2775C14.3321 20.5125 13.9712 20.6881 13.7212 20.8041C13.687 20.8199 13.6549 20.8347 13.625 20.8483C13.5931 20.8337 13.5587 20.818 13.522 20.8009C13.2676 20.6828 12.9007 20.5039 12.4588 20.2645C11.5734 19.7848 10.3962 19.0669 9.22301 18.1134C6.85826 16.1915 4.625 13.4119 4.625 9.78112C4.625 7.17551 6.70118 5.0835 9.2375 5.0835C10.7922 5.0835 12.1712 5.8667 13.0093 7.0765Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </BottomNavigationItemIcon>
        <BottomNavigationItemTitle>Search</BottomNavigationItemTitle>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <BottomNavigationItemIcon>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0093 7.0765C13.1494 7.27873 13.3798 7.39939 13.6258 7.39939C13.8719 7.39939 14.1022 7.27873 14.2424 7.0765C15.0805 5.8667 16.4595 5.0835 18.0142 5.0835C20.5505 5.0835 22.6267 7.17551 22.6267 9.78112C22.6267 9.84344 22.6255 9.90543 22.6232 9.96707L22.6231 9.96707L22.6228 9.97891C22.5432 13.5449 20.3076 16.2768 17.9633 18.1649C16.8005 19.1014 15.6392 19.8065 14.7672 20.2775C14.3321 20.5125 13.9712 20.6881 13.7212 20.8041C13.687 20.8199 13.6549 20.8347 13.625 20.8483C13.5931 20.8337 13.5587 20.818 13.522 20.8009C13.2676 20.6828 12.9007 20.5039 12.4588 20.2645C11.5734 19.7848 10.3962 19.0669 9.22301 18.1134C6.85826 16.1915 4.625 13.4119 4.625 9.78112C4.625 7.17551 6.70118 5.0835 9.2375 5.0835C10.7922 5.0835 12.1712 5.8667 13.0093 7.0765Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </BottomNavigationItemIcon>
        <BottomNavigationItemTitle>Cart</BottomNavigationItemTitle>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <BottomNavigationItemIcon>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0093 7.0765C13.1494 7.27873 13.3798 7.39939 13.6258 7.39939C13.8719 7.39939 14.1022 7.27873 14.2424 7.0765C15.0805 5.8667 16.4595 5.0835 18.0142 5.0835C20.5505 5.0835 22.6267 7.17551 22.6267 9.78112C22.6267 9.84344 22.6255 9.90543 22.6232 9.96707L22.6231 9.96707L22.6228 9.97891C22.5432 13.5449 20.3076 16.2768 17.9633 18.1649C16.8005 19.1014 15.6392 19.8065 14.7672 20.2775C14.3321 20.5125 13.9712 20.6881 13.7212 20.8041C13.687 20.8199 13.6549 20.8347 13.625 20.8483C13.5931 20.8337 13.5587 20.818 13.522 20.8009C13.2676 20.6828 12.9007 20.5039 12.4588 20.2645C11.5734 19.7848 10.3962 19.0669 9.22301 18.1134C6.85826 16.1915 4.625 13.4119 4.625 9.78112C4.625 7.17551 6.70118 5.0835 9.2375 5.0835C10.7922 5.0835 12.1712 5.8667 13.0093 7.0765Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </BottomNavigationItemIcon>
        <BottomNavigationItemTitle>Profile</BottomNavigationItemTitle>
      </BottomNavigationItem>
    </BottomNavigation>
  ),
};
