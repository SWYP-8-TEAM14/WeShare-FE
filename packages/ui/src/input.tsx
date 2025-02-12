import * as React from "react";
import { tv } from "tailwind-variants";
import { focusRing } from "./rings";
import { cn } from "./utils";

export const inputStyles = tv({
  extend: focusRing,
  base: "ui:w-full ui:rounded-sm ui:py-4 ui:px-4.5 ui:bg-gray-100 ui:placeholder:text-body-2 ui:placeholder:text-gray-500 ui:text-body-2",
});

export const Input = React.forwardRef<
  React.ComponentRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(inputStyles({ className }))} {...props} />
));
