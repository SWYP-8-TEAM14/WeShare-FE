"use client";
import * as React from "react";
import { Description, ErrorMessage, InputLength } from "./form";
import { Input } from "./input";

type TextFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  description?: string;
  errorMessage?: string;
  endContent?: React.ReactNode;
};

export const TextField = React.forwardRef<
  React.ComponentRef<"input">,
  TextFieldProps
>(
  (
    {
      className,
      maxLength,
      label,
      endContent,
      description,
      errorMessage,
      onChange,
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    const innerRef = React.useRef<HTMLInputElement>(null);
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
          <label className="text-heading-5" htmlFor={"input-" + id}>
            {label}
          </label>
          {maxLength && (
            <InputLength maxLength={maxLength} currentLength={length} />
          )}
        </div>
        <div className="ui:flex ui:items-center ui:gap-2.5">
          <Input
            id={"input-" + id}
            ref={innerRef}
            onChange={(e) => {
              onChange?.(e);
              setLength(e.target.value.length);
            }}
            {...props}
          />
          {endContent}
        </div>
        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : description ? (
          <Description>{description}</Description>
        ) : null}
      </div>
    );
  }
);
