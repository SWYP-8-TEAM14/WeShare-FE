"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "./utils";

const BottomSheet = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
BottomSheet.displayName = "BottomSheet";

const BottomSheetTrigger = DrawerPrimitive.Trigger;

const BottomSheetPortal = DrawerPrimitive.Portal;

const BottomSheetClose = DrawerPrimitive.Close;

const BottomSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("ui:fixed ui:inset-0 ui:z-50 ui:bg-black/50", className)}
    {...props}
  />
));
BottomSheetOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const BottomSheetContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "ui:fixed ui:inset-x-0 ui:bottom-0 ui:z-50 ui:mt-24 ui:flex ui:h-auto ui:flex-col ui:rounded-t-lg ui:bg-white ui:w-full ui:max-w-sm ui:left-1/2 ui:transform ui:-translate-x-1/2",
        className
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </BottomSheetPortal>
));
BottomSheetContent.displayName = "BottomSheetContent";

const BottomSheetHandle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "ui:mx-auto ui:mt-4 ui:h-[5px] ui:w-[36px] ui:rounded-full ui:bg-gray-400",
      className
    )}
    {...props}
  />
);
BottomSheetHandle.displayName = "BottomSheetHandle";

const BottomSheetHeader = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "ui:flex ui:justify-between ui:items-center ui:gap-1.5 ui:px-4.5 ui:pt-4 ui:pb-2.5 ui:text-center",
      className
    )}
    {...props}
  />
);
BottomSheetHeader.displayName = "BottomSheetHeader";

const BottomSheetFooter = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("ui:mt-auto ui:flex ui:flex-col ui:gap-2 ui:p-4", className)}
    {...props}
  />
);
BottomSheetFooter.displayName = "BottomSheetFooter";

const BottomSheetTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("ui:text-body-1", className)}
    {...props}
  />
));
BottomSheetTitle.displayName = DrawerPrimitive.Title.displayName;

const BottomSheetDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("ui:text-body-4", className)}
    {...props}
  />
));
BottomSheetDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHandle,
  BottomSheetHeader,
  BottomSheetOverlay,
  BottomSheetPortal,
  BottomSheetTitle,
  BottomSheetTrigger,
};
