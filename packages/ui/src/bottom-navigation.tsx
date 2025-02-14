"use client";
import * as React from "react";
import { cn } from "./utils";

export const BottomNavigation = React.forwardRef<
  React.ComponentRef<"nav">,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "ui:relative ui:flex ui:h-[74px] ui:pt-2 ui:pb-2.5 ui:px-4.5 ui:shadow-[0_-1px_0_var(--ui-color-gray-200)]",
      className
    )}
    {...props}
  />
));

BottomNavigation.displayName = "BottomNavigation";

interface BottomNavigationItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  selected?: boolean;
}

export const BottomNavigationItem = React.forwardRef<
  React.ComponentRef<"a">,
  BottomNavigationItemProps
>(({ className, children, selected, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "ui:flex ui:flex-1 ui:flex-col ui:gap-1 ui:items-center ui:justify-center ui:w-1/5 ui:h-full ui:text-gray-700",
      selected ? "ui:font-semibold" : "ui:font-medium",
      className
    )}
    {...props}
  >
    {children}
  </a>
));

BottomNavigationItem.displayName = "BottomNavigationItem";

export const BottomNavigationItemIcon = React.forwardRef<
  React.ComponentRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("", className)} {...props} />
));

export const BottomNavigationItemTitle = React.forwardRef<
  React.ComponentRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("ui:text-body-7 ui:leading-[1.4]", className)}
    {...props}
  />
));
