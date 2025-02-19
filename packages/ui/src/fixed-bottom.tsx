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
