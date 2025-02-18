import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/alert-dialog";
import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button color="red">Revoke access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogIcon>
            <svg
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon_dialog">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M22.5003 3.66699C32.6258 3.66699 40.8337 11.8748 40.8337 22.0003C40.8337 32.1258 32.6258 40.3337 22.5003 40.3337C12.3748 40.3337 4.16699 32.1258 4.16699 22.0003C4.16699 11.8748 12.3748 3.66699 22.5003 3.66699ZM22.5003 7.33366C18.6105 7.33366 14.88 8.87889 12.1294 11.6294C9.37889 14.38 7.83366 18.1105 7.83366 22.0003C7.83366 25.8902 9.37889 29.6207 12.1294 32.3712C14.88 35.1218 18.6105 36.667 22.5003 36.667C26.3902 36.667 30.1207 35.1218 32.8712 32.3712C35.6218 29.6207 37.167 25.8902 37.167 22.0003C37.167 18.1105 35.6218 14.38 32.8712 11.6294C30.1207 8.87889 26.3902 7.33366 22.5003 7.33366ZM22.5003 27.5003C22.9866 27.5003 23.4529 27.6935 23.7967 28.0373C24.1405 28.3811 24.3337 28.8474 24.3337 29.3337C24.3337 29.8199 24.1405 30.2862 23.7967 30.63C23.4529 30.9738 22.9866 31.167 22.5003 31.167C22.0141 31.167 21.5478 30.9738 21.204 30.63C20.8601 30.2862 20.667 29.8199 20.667 29.3337C20.667 28.8474 20.8601 28.3811 21.204 28.0373C21.5478 27.6935 22.0141 27.5003 22.5003 27.5003ZM22.5003 11.0003C22.9866 11.0003 23.4529 11.1935 23.7967 11.5373C24.1405 11.8811 24.3337 12.3474 24.3337 12.8337V23.8337C24.3337 24.3199 24.1405 24.7862 23.7967 25.13C23.4529 25.4738 22.9866 25.667 22.5003 25.667C22.0141 25.667 21.5478 25.4738 21.204 25.13C20.8601 24.7862 20.667 24.3199 20.667 23.8337V12.8337C20.667 12.3474 20.8601 11.8811 21.204 11.5373C21.5478 11.1935 22.0141 11.0003 22.5003 11.0003Z"
                    fill="#757575"
                  />
                </g>
              </g>
            </svg>
          </AlertDialogIcon>
          <AlertDialogTitle>Revoke access</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Revoke access</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
