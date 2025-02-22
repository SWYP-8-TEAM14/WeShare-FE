/**
 * List header component
 * 리스트 헤더 컴포넌트는 리스트의 그룹 맨 위에 배치되어 리스트 그룹을 구분하고, 리스트 그룹의 제목을 표시합니다. 우측에 버튼을 배치하여 리스트 그룹에 대한 추가 작업(예: 리스트 더보기)을 수행할 수 있습니다.
 */

import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { cn, tv } from "./utils";

export const ListHeader = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function ListHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "ui:px-4.5 ui:flex ui:justify-between ui:items-center",
        className
      )}
      {...props}
    />
  );
});
ListHeader.displayName = "ListHeader";

const listHeaderTitleStyles = tv({
  variants: {
    size: {
      medium: "ui:text-heading-5",
      large: "ui:text-heading-3",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const ListHeaderTitle = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof listHeaderTitleStyles>
>(function ListHeaderTitle({ className, size, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(listHeaderTitleStyles({ className, size }))}
      {...props}
    />
  );
});
ListHeaderTitle.displayName = "ListHeaderTitle";

export const ListHeaderAction = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function ListHeaderAction({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("ui:text-body-6 ui:text-gray-700", className)}
      {...props}
    />
  );
});
ListHeaderAction.displayName = "ListHeaderAction";
