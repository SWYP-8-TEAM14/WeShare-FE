import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeActive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6.138A4.92 4.92 0 0 1 16.053 4c2.733 0 4.95 2.251 4.95 5.029q0 .099-.004.198C20.838 16.409 12 20 12 20S3 16.343 3 9.029C3 6.25 5.216 4 7.95 4c1.675 0 3.155.845 4.05 2.138"
    />
  </svg>
);
export default SvgLikeActive;
