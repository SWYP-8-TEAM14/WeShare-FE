import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import { tv } from "tailwind-variants";
import { cn } from "./utils";

export const labelStyles = tv({
  base: "ui:text-heading-5",
});

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelStyles({ className }))}
    {...props}
  />
));
