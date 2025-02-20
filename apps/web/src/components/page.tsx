import { cn } from "@repo/ui/utils";

export default function Page({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex flex-col min-h-dvh bg-gray-100", className)}
      {...props}
    >
      {children}
    </div>
  );
}
