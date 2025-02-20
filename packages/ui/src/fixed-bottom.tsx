import * as React from "react";
import { cn } from "./utils";

export const FixedBottom = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0", className)} {...props}>
      {children}
    </div>
  );
};
FixedBottom.displayName = "FixedBottom";

type FixedBottomActionsProps = React.ComponentPropsWithoutRef<"div"> & {
  columns?: "1" | "2";
};

export const FixedBottomActions = ({
  children,
  className,
  columns = "1",
  ...props
}: FixedBottomActionsProps) => {
  return (
    <div
      className={cn(
        "ui:bg-white ui:px-4.5 ui:py-2.5 ui:border-t ui:border-gray-200 grid gap-2",
        columns === "1" ? "grid-cols-1" : "grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
