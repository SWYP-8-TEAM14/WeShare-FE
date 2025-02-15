import * as React from "react";

import { tv, VariantProps } from "tailwind-variants";
import { focusVisibleRing } from "./rings";

export const textareaStyles = tv({
  extend: focusVisibleRing,
  base: "ui:flex ui:min-h-24 ui:w-full ui:py-4 ui:px-4.5 ui:rounded-sm ui:text-body-2 ui:placeholder:text-gray-500 ui:bg-gray-100",
  variants: {
    resize: {
      true: "",
      false: "ui:resize-none",
    },
  },
  defaultVariants: {
    resize: true,
  },
});

export type TextareaProps = React.ComponentPropsWithRef<"textarea"> &
  VariantProps<typeof textareaStyles>;

export const Textarea = React.forwardRef<
  React.ComponentRef<"textarea">,
  TextareaProps
>(({ className, resize, ...props }, ref) => {
  return (
    <textarea
      className={textareaStyles({ className, resize })}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
