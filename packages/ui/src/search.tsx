import * as React from "react";
import { cn } from "./utils";

export const Search = React.forwardRef<
  React.ComponentRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "ui:w-full ui:py-2.5 ui:pl-4.5 ui:pr-4.5  ui:rounded-sm ui:shadow-sm ui:text-body-4 ui:placeholder:text-body-4 ui:placeholder:text-gray-500 ui:bg-gray-100",
      className
    )}
    {...props}
  />
));
