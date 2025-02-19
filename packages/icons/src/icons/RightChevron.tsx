import * as React from "react";
import type { SVGProps } from "react";
const SvgRightChevron = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.72 20.03a.75.75 0 0 1 0-1.06L15.69 12 8.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0"
    />
  </svg>
);
export default SvgRightChevron;
