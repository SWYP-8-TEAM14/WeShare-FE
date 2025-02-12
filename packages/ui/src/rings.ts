import { tv } from "./utils";

export const focusVisibleRing = tv({
  base: "ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:ring-gray-900 ui:ring-offset-white ui:transition-shadow ui:duration-200",
});

export const focusRing = tv({
  base: "ui:focus:ring-2 ui:focus:ring-offset-2 ui:focus:ring-gray-900 ui:ring-offset-white ui:focus:outline-none ui:transition-shadow ui:duration-200",
});
