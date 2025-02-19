import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.05 16.95a3 3 0 0 1 0-4.243l1.172-1.171a1 1 0 1 0-1.414-1.415l-1.172 1.172a5 5 0 1 0 7.071 7.071l1.329-1.328a1 1 0 1 0-1.414-1.415l-1.329 1.329a3 3 0 0 1-4.242 0M10.308 6.621a1 1 0 0 0 1.414 1.415l.985-.986a3 3 0 1 1 4.243 4.243l-.828.828a1 1 0 0 0 1.414 1.415l.828-.829a5 5 0 0 0-7.07-7.07z"
    />
    <path
      fill="currentColor"
      d="M15.222 10.536a1 1 0 1 0-1.414-1.415l-4 4a1 1 0 0 0 1.414 1.415z"
    />
  </svg>
);
export default SvgLinkShare;
