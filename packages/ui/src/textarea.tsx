"use client";
import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Description, ErrorMessage, InputLength } from "./form";
import { focusVisibleRing } from "./rings";
import { cn } from "./utils";

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
    resize: false,
  },
});

export type TextareaProps = React.ComponentPropsWithRef<"textarea"> &
  VariantProps<typeof textareaStyles> & {
    label: string;
    description?: string;
    errorMessage?: string;
  };

export const Textarea = React.forwardRef<
  React.ComponentRef<"textarea">,
  TextareaProps
>(
  (
    {
      className,
      resize,
      label,
      description,
      errorMessage,
      maxLength,
      onChange,
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    const [length, setLength] = React.useState(0);

    React.useImperativeHandle(ref, () => innerRef.current!);

    React.useEffect(() => {
      if (innerRef.current?.value) {
        setLength(innerRef.current.value.length);
      }
    });

    return (
      <div className="ui:flex ui:flex-col ui:gap-2 ui:w-full">
        <div className="ui:flex ui:flex-row ui:justify-between ui:gap-2">
          <label className="text-heading-5" htmlFor={"textarea-" + id}>
            {label}
          </label>
          {maxLength && (
            <InputLength maxLength={maxLength} currentLength={length} />
          )}
        </div>
        <textarea
          id={"textarea-" + id}
          ref={ref}
          onChange={(e) => {
            onChange?.(e);
            setLength(e.target.value.length);
          }}
          className={cn(textareaStyles({ className, resize }))}
          {...props}
        />
        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : description ? (
          <Description>{description}</Description>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
