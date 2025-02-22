import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusVisibleRing } from "./rings";
import { RadixUISlot } from "./types";
import { tv } from "./utils";
export const chipStyles = tv({
  extend: focusVisibleRing,
  base: "ui:whitespace-nowrap ui:disabled:bg-gray-200 ui:disabled:text-gray-500 ui:rounded-full ui:text-center ui:px-3.5 ui:py-2.5 ui:text-body-3 ui:h-10 ui:inline-flex ui:items-center ui:justify-center",
  variants: {
    variant: {
      primary: "ui:bg-primary-400 ui:text-white",
      secondary: "ui:bg-primary-900 ui:text-white",
      tertiary:
        "ui:bg-gray-100 ui:shadow-[inset_0_0_0_1px_var(--ui-color-gray-200)] ui:text-gray-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ChipProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof chipStyles> &
  RadixUISlot;

export const Chip = React.forwardRef<React.ComponentRef<"div">, ChipProps>(
  ({ className, variant, asChild, children, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={ref}
        className={chipStyles({ variant, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Chip.displayName = "Chip";
