import * as React from "react";
import { cn } from "./utils";

export const TopNavigation = React.forwardRef<
  React.ComponentRef<"nav">,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "ui:relative ui:flex ui:h-12.5 ui:py-2 ui:px-4.5 ui:shadow-[0_1px_0_var(--ui-color-gray-200)] ui:bg-white ui:items-center",
      className
    )}
    {...props}
  />
));

export const TopNavigationTitle = React.forwardRef<
  React.ComponentRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "ui:text-heading-4 ui:text-gray-800 ui:absolute ui:left-1/2 ui:-translate-x-1/2 ui:top-1/2 ui:-translate-y-1/2 ui:whitespace-nowrap",
      className
    )}
    {...props}
  />
));

TopNavigation.displayName = "TopNavigation";

export const TopNavigationLeft = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "ui:absolute ui:left-4.5 ui:top-1/2 ui:-translate-y-1/2 flex items-center",
      className
    )}
    {...props}
  />
));

TopNavigationLeft.displayName = "TopNavigationLeft";

export const TopNavigationRight = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "ui:absolute ui:right-4.5 ui:top-1/2 ui:-translate-y-1/2 flex items-center",
      className
    )}
    {...props}
  />
));

TopNavigationRight.displayName = "TopNavigationRight";
