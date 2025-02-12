"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "./utils";

const SegmentedControl = TabsPrimitive.Root;

const SegmentedControlList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "ui:w-full ui:flex ui:grid-rows-1 ui:bg-gray-100 ui:p-1 ui:rounded-sm",
      className
    )}
    {...props}
  />
));
SegmentedControlList.displayName = TabsPrimitive.List.displayName;

const SegmentedControlTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ui:text-body-1 ui:py-2.5 ui:h-10.5 ui:box-border  ui:px-2.5 ui:bg-gray-100 ui:text-gray-600 ui:data-[state=active]:text-gray-800 ui:data-[state=active]:bg-white  ui:flex-1 ui:whitespace-nowrap ui:data-[state=active]:shadow-[0_0_8px_0_rgba(0,0,0,0.08)] ui:rounded-[4px]",
      className
    )}
    {...props}
  />
));
SegmentedControlTrigger.displayName = TabsPrimitive.Trigger.displayName;

const SegmentedControlContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("", className)} {...props} />
));
SegmentedControlContent.displayName = TabsPrimitive.Content.displayName;

export {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger,
};
