import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { focusRing } from "./rings";
import { cn, tv } from "./utils";

export const searchStyles = tv({
  extend: focusRing,
  base: "ui:w-full ui:py-2.5 ui:pl-4.5 ui:pr-4.5 ui:rounded-sm ui:shadow-sm ui:text-body-4 ui:placeholder:text-body-4 ui:placeholder:text-gray-500 ui:bg-gray-100",
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
      <input ref={ref} className={cn(searchStyles({ className }))} {...props} />

      {value && onClear && (
        <button
          type="button"
          className="absolute right-[9px] top-1/2 -translate-y-1/2"
          aria-label="Clear value"
          onClick={() => {
            setValue("");
            onClear?.();
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="ui:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="9"
              fill="currentColor"
            />
            <path
              d="M16.1207 9.71072C16.6264 9.20499 16.6264 8.38503 16.1207 7.8793C15.615 7.37357 14.795 7.37357 14.2893 7.8793L12 10.1686L9.71072 7.8793C9.20499 7.37357 8.38503 7.37357 7.8793 7.8793C7.37357 8.38503 7.37357 9.20499 7.8793 9.71072L10.1686 12L7.8793 14.2893C7.37357 14.795 7.37357 15.615 7.8793 16.1207C8.38503 16.6264 9.20499 16.6264 9.71072 16.1207L12 13.8314L14.2893 16.1207C14.795 16.6264 15.615 16.6264 16.1207 16.1207C16.6264 15.615 16.6264 14.795 16.1207 14.2893L13.8314 12L16.1207 9.71072Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </div>
  );
});
