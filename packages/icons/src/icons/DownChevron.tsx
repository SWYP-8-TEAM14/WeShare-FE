import * as React from "react";
import type { SVGProps } from "react";
const SvgDownChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.97 8.72a.75.75 0 0 1 1.06 0L12 15.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 0-1.06"
    />
  </svg>
);
export default SvgDownChevron;
