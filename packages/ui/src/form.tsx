import * as React from "react";
import { cn, tv } from "./utils";

export const descriptionStyle = tv({
  base: "ui:text-semantic-positive ui:text-detail-3",
});

export const Description = React.forwardRef<
  React.ComponentRef<"p">,
  React.ComponentPropsWithRef<"p">
>(({ className, ...props }, ref) => (
  <p ref={ref} className={descriptionStyle({ className })} {...props} />
));

export const errorMessageStyle = tv({
  base: "ui:text-detail-3 ui:text-semantic-warning",
});

export const ErrorMessage = React.forwardRef<
  React.ComponentRef<"p">,
  React.ComponentPropsWithRef<"p">
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn(errorMessageStyle({ className }))} {...props} />
));

interface InputLengthProps extends React.ComponentPropsWithRef<"p"> {
  maxLength: number;
  currentLength: number;
}

export const inputLengthStyle = tv({
  base: "ui:text-detail-3 ui:text-gray-500",
});

export const InputLength = React.forwardRef<
  React.ComponentRef<"p">,
  InputLengthProps
>(({ maxLength, currentLength, className, ...props }, ref) => (
  <p
    aria-label={
      props["aria-label"] ||
      `현재 입력한 글자 수는 ${currentLength}자 입니다. 최대 ${maxLength}자까지 입력할 수 있습니다.`
    }
    ref={ref}
    className={cn(inputLengthStyle({ className }))}
    {...props}
  >
    <span className="ui:text-detail-3 ui:text-gray-900">{currentLength}</span>
    &nbsp;/&nbsp;
    {maxLength}
  </p>
));
