import { forwardRef } from "react";

type ImageInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "value" | "onChange"
> & {
  onChange: (files: File) => void;
};

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ onChange, ...props }, ref) => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files?.[0];
      if (files) {
        onChange(files);
      }
    };

    return (
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={onChangeInput}
        {...props}
        value={undefined} // Prevent controlled input warning
      />
    );
  }
);

export default ImageInput;
