import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.906 13.649a1.65 1.65 0 0 0-.467.934l-.516 3.627a1.65 1.65 0 0 0 1.866 1.866l3.627-.516a1.65 1.65 0 0 0 .934-.467l6.73-6.73-5.444-5.444zM12.555 6l5.444 5.444 1.61-1.61a1.65 1.65 0 0 0 0-2.333l-3.111-3.11a1.65 1.65 0 0 0-2.334 0z"
    />
  </svg>
);
export default SvgEdit;
