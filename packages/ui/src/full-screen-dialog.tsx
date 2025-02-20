"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "./utils";

const FullScreenDialog = DialogPrimitive.Root;

const FullScreenDialogTrigger = DialogPrimitive.Trigger;

const FullScreenDialogPortal = DialogPrimitive.Portal;

const FullScreenDialogClose = DialogPrimitive.Close;

const FullScreenDialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, onInteractOutside, ...props }, ref) => (
  <FullScreenDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      onInteractOutside={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onInteractOutside?.(e);
      }}
      className={cn(
        "ui:fixed ui:left-1/2 ui:top-0 ui:h-full ui:z-50  ui:w-full ui:max-w-sm  ui:-translate-x-1/2 ui:bg-white",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </FullScreenDialogPortal>
));
FullScreenDialogContent.displayName = DialogPrimitive.Content.displayName;

const FullScreenDialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("ui:text-heading-4", className)}
    {...props}
  />
));
FullScreenDialogTitle.displayName = DialogPrimitive.Title.displayName;

export {
  FullScreenDialog,
  FullScreenDialogClose,
  FullScreenDialogContent,
  FullScreenDialogTitle,
  FullScreenDialogTrigger,
};
