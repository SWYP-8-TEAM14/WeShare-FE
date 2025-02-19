import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.89 5.19a.65.65 0 0 1 .919.92L12.919 12l5.89 5.891a.65.65 0 1 1-.92.92L12 12.918 6.11 18.81a.65.65 0 1 1-.919-.92L11.08 12 5.19 6.11a.65.65 0 0 1 .92-.92L12 11.08z"
    />
  </svg>
);
export default SvgClose;
