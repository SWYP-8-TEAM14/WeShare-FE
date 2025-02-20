import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusVisibleRing } from "./rings";
import { RadixUISlot } from "./types";
import { tv } from "./utils";

export const iconButtonStyles = tv({
  extend: focusVisibleRing,
  base: "ui:whitespace-nowrap ui:disabled:opacity-50 ui:disabled:cursor-not-allowed ui:rounded-sm",
  variants: {
    variant: {
      transparent: "ui:bg-transparent ui:text-gray-700",
      primary: "ui:bg-primary-400 ui:text-white",
      secondary: "ui:bg-primary-900 ui:text-white",
      tertiary:
        "ui:bg-white ui:shadow-[inset_0_0_0_1px_var(--ui-color-gray-200)] ui:text-gray-700",
    },
    size: {
      small: "ui:p-0",
      medium: "ui:p-1",
      large: "ui:p-1.5",
    },
    fullWidth: {
      true: "ui:w-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "transparent",
    size: "small",
    fullWidth: false,
  },
});

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof iconButtonStyles> &
  RadixUISlot;

export const IconButton = React.forwardRef<
  React.ComponentRef<"button">,
  IconButtonProps
>(
  (
    { className, variant, size, asChild, children, fullWidth, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={iconButtonStyles({ variant, fullWidth, size, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
IconButton.displayName = "IconButton";
