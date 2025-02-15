"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { cn, tv } from "./utils";

export const checkboxStyles = tv({
  base: "ui:rounded-xs ui:data-[state=unchecked]:shadow-[inset_0_0_0_1px_var(--ui-color-gray-200)] ui:bg-white ui:data-[state=checked]:bg-primary-900 ui:text-gray-200 ui:data-[state=checked]:text-white",
  variants: {
    size: {
      sm: "ui:h-4.5 ui:w-4.5",
      md: "ui:h-6 ui:w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> &
  VariantProps<typeof checkboxStyles>;

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size = "md", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={checkboxStyles({ size, className })}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("ui:flex ui:items-center ui:justify-center text-current")}
    >
      {size == "md" ? (
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5L4.5 8L11.5 1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 3.375L3.875 6L9.125 0.75"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
