import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeInactive = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M10.952 5.03c.403.313.757.686 1.049 1.108a5 5 0 0 1 1.048-1.108A4.88 4.88 0 0 1 16.052 4c2.733 0 4.95 2.251 4.95 5.029q0 .099-.004.198C20.838 16.409 12 20 12 20S3 16.343 3 9.029C3 6.25 5.216 4 7.95 4c1.129 0 2.17.384 3.002 1.03m1.049 2.608a1.5 1.5 0 0 1-1.233-.646A3.42 3.42 0 0 0 7.95 5.5C6.067 5.5 4.5 7.057 4.5 9.029c0 2.995 1.842 5.354 3.946 7.064A18.8 18.8 0 0 0 12 18.352a18.856 18.856 0 0 0 3.498-2.213c2.087-1.682 3.935-4.004 4-6.946V9.17q.004-.07.004-.14c0-1.972-1.567-3.529-3.45-3.529-1.156 0-2.187.58-2.818 1.492A1.5 1.5 0 0 1 12 7.638"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLikeInactive;
