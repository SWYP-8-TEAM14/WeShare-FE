import * as React from "react";
import type { SVGProps } from "react";
const SvgBackChevron = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.96 4.54a.65.65 0 0 1 0 .92L8.418 12l6.54 6.54a.65.65 0 1 1-.919.92l-7-7a.65.65 0 0 1 0-.92l7-7a.65.65 0 0 1 .92 0"
    />
  </svg>
);
export default SvgBackChevron;
