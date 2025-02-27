import { useId } from "react";

export default function useFormId() {
  const id = useId();

  return `form-${id}`;
}
