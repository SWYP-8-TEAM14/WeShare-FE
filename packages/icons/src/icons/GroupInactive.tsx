import * as React from "react";
import type { SVGProps } from "react";
const SvgGroupInactive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.8 10.701c.36 0 .65-.396.65-.884s-.29-.884-.65-.884c-.359 0-.65.396-.65.884s.291.884.65.884M14.199 10.701c.359 0 .65-.396.65-.884s-.291-.884-.65-.884-.65.396-.65.884.29.884.65.884M8.37 12.324a.65.65 0 0 1 .816.423c.337 1.064 1.498 1.886 2.814 1.886 1.33 0 2.476-.773 2.812-1.879a.65.65 0 1 1 1.244.378c-.533 1.753-2.264 2.8-4.056 2.8-1.805 0-3.523-1.117-4.054-2.793a.65.65 0 0 1 .424-.815"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.3 0a7.7 7.7 0 1 1-15.4 0 7.7 7.7 0 0 1 15.4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGroupInactive;
