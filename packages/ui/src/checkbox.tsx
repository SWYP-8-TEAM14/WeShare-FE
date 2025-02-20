"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckLargeIcon, CheckSmallIcon } from "@repo/icons";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { tv } from "./utils";

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
    {size == "md" ? (
      <CheckLargeIcon />
    ) : (
      <CheckSmallIcon className="size-4.5" />
    )}
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
