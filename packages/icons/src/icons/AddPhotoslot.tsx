import * as React from "react";
import type { SVGProps } from "react";
const SvgAddPhotoslot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="currentColor" />
    <path
      fill="#fff"
      d="M13.482 6.815a1.481 1.481 0 1 0-2.963 0v3.703H6.815a1.482 1.482 0 0 0 0 2.963h3.704v3.704a1.481 1.481 0 1 0 2.963 0v-3.704h3.704a1.482 1.482 0 0 0 0-2.963h-3.704z"
    />
  </svg>
);
export default SvgAddPhotoslot;
