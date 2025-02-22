"use client";
import * as React from "react";
import { cn } from "./utils";

export const FixedBottom = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const spaceRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(spaceRef.current?.clientHeight || 0);
  });
  return (
    <>
      <div
        style={{
          height: `${height}px`,
        }}
      />
      <div
        ref={spaceRef}
        className={cn(
          "ui:fixed ui:bottom-0 ui:left-1/2 ui:-translate-x-1/2 ui:right-0 ui:max-w-sm ui:w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
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
