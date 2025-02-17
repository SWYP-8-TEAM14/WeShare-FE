"use client";

import * as ToastPrimitives from "@radix-ui/react-toast";
import * as React from "react";

import { VariantProps } from "tailwind-variants";
import { cn, tv } from "./utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "ui:fixed ui:top-0 ui:z-[100] ui:flex ui:max-h-screen ui:flex-col-reverse ui:px-4 ui:pb-18 ui:bottom-0 ui:left-1/2 ui:sm:top-auto ui:sm:flex-col ui:-translate-x-1/2",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = tv({
  base: "ui:group ui:pointer-events-auto ui:relative ui:flex ui:items-center ui:justify-between ui:space-x-2 ui:rounded-sm ui:px-5 ui:py-2.5 ui:max-w-[300px]",
  variants: {
    variant: {
      default: " ui:bg-black/70 ui:text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cn("", className)} {...props} />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn("", className)}
    toast-close=""
    {...props}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.8895 5.18992C18.1433 4.93607 18.5549 4.93604 18.8088 5.18986C19.0626 5.44368 19.0626 5.85524 18.8088 6.1091L12.9188 11.9999L18.809 17.891C19.0628 18.1448 19.0628 18.5564 18.8089 18.8102C18.5551 19.064 18.1435 19.064 17.8897 18.8101L11.9996 12.9193L6.10965 18.81C5.85583 19.0639 5.44427 19.0639 5.19041 18.8101C4.93655 18.5563 4.93653 18.1447 5.19035 17.8909L11.0804 11.9999L5.19052 6.1092C4.9367 5.85534 4.93672 5.44378 5.19058 5.18996C5.44444 4.93613 5.856 4.93616 6.10982 5.19002L11.9996 11.0806L17.8895 5.18992Z"
        fill="black"
      />
    </svg>
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("ui:text-body-4", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("ui:text-body-7 ui:opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
