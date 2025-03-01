import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "./utils";

export const labelStyles = tv({
  base: "",
  variants: {
    size: {
      sm: "ui:text-body-6",
      md: "ui:text-body-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelStyles>;

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelStyles({ size, className }))}
    {...props}
  />
));
