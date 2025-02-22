import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusVisibleRing } from "./rings";
import { RadixUISlot } from "./types";
import { tv } from "./utils";
export const floatingButtonStyles = tv({
  extend: focusVisibleRing,
  base: "ui:whitespace-nowrap ui:rounded-full ui:text-heading-5 ui:py-3.5 ui:px-4.5 ui:text-white ui:bg-primary-900 ui:shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] ui:flex ui:gap-1 ui:items-center",
});

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof floatingButtonStyles> &
  RadixUISlot;

export const FloatingButton = React.forwardRef<
  React.ComponentRef<"button">,
  ButtonProps
>(({ className, asChild, children, ...props }, ref) => {
  const Component = asChild ? Slot : "button";
  return (
    <div className="ui:absolute ui:-top-5 ui:-translate-y-full ui:left-1/2 ui:-translate-x-1/2  ui:flex ui:justify-center">
      <Component
        ref={ref}
        className={floatingButtonStyles({ className })}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
});
FloatingButton.displayName = "FloatingButton";
