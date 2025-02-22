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
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    const [value, setValue] = React.useState(props.value || "");

    const valueLength = typeof value === "string" ? value.length : 0;

    return (
      <div className="ui:flex ui:flex-col ui:gap-2 ui:w-full">
        <div className="ui:flex ui:flex-row ui:justify-between ui:gap-2">
          <label className="text-heading-5" htmlFor={"input-" + id}>
            {label}
          </label>
          {maxLength && (
            <InputLength maxLength={maxLength} currentLength={valueLength} />
          )}
        </div>
        <div className="ui:flex ui:items-center ui:gap-2.5">
          <Input
            id={"input-" + id}
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
