import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusVisibleRing } from "./rings";
import { RadixUISlot } from "./types";
import { tv } from "./utils";
export const buttonStyles = tv({
  extend: focusVisibleRing,
  base: "ui:whitespace-nowrap ui:disabled:bg-gray-200 ui:disabled:text-gray-500 ui:rounded-sm ui:text-center",
  variants: {
    variant: {
      primary: "ui:bg-primary-400 ui:text-white",
      secondary: "ui:bg-primary-900 ui:text-white",
      tertiary:
        "ui:bg-white ui:shadow-[inset_0_0_0_1px_var(--ui-color-gray-200)] ui:text-gray-700",
    },
    size: {
      small: "ui:px-3 ui:py-2 ui:text-body-6 ui:h-8.5",
      medium: "ui:px-4.5 ui:py-2.5 ui:text-body-4 ui:h-10",
      large: "ui:px-4.5 ui:py-3.5 ui:text-body-1 ui:h-13.5",
    },
    fullWidth: {
      true: "ui:w-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    fullWidth: false,
  },
});

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonStyles> &
  RadixUISlot;

export const Button = React.forwardRef<
  React.ComponentRef<"button">,
  ButtonProps
>(
  (
    { className, variant, size, asChild, children, fullWidth, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={buttonStyles({ variant, fullWidth, size, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";
