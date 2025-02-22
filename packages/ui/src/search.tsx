"use client";
import { DeletePhotoslotIcon, SearchIcon } from "@repo/icons";
import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusRing } from "./rings";
import { cn, tv } from "./utils";

export const searchStyles = tv({
  extend: focusRing,
  base: "ui:w-full ui:py-2.5 ui:pl-11.5 ui:pr-4.5 ui:rounded-sm ui:text-body-4 ui:placeholder:text-body-4 ui:placeholder:text-gray-500 ui:bg-gray-100",
});

type SearchProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof searchStyles> & {
    onClear?: () => void;
  };

export const Search = React.forwardRef<
  React.ComponentRef<"input">,
  SearchProps
>(({ className, onClear, ...props }, ref) => {
  const [value, setValue] = React.useState(props.value || "");

  React.useEffect(() => {
    setValue(props.value || "");
  }, [props.value]);

  return (
    <div className="ui:relative">
      <SearchIcon className="ui:absolute ui:left-4.5 ui:top-1/2 ui:-translate-y-1/2 ui:text-gray-900" />
      <input ref={ref} className={cn(searchStyles({ className }))} {...props} />

      {value && onClear && (
        <button
          type="button"
          className="ui:absolute ui:right-[9px] ui:top-1/2 ui:-translate-y-1/2"
          aria-label="Clear value"
          onClick={() => {
            setValue("");
            onClear?.();
          }}
        >
          <DeletePhotoslotIcon className="ui:text-gray-600" />
        </button>
      )}
    </div>
  );
});
