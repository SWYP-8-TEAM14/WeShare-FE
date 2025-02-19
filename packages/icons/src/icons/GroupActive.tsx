import * as React from "react";
import type { SVGProps } from "react";
const SvgGroupActive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M9.8 10.701c.36 0 .65-.396.65-.884s-.29-.884-.65-.884c-.359 0-.65.396-.65.884s.291.884.65.884m4.399 0c.359 0 .65-.396.65-.884s-.291-.884-.65-.884-.65.396-.65.884.29.884.65.884M8.37 12.324a.65.65 0 0 1 .816.423c.337 1.064 1.498 1.886 2.814 1.886 1.33 0 2.476-.773 2.812-1.879a.65.65 0 1 1 1.244.378c-.533 1.753-2.264 2.8-4.056 2.8-1.805 0-3.523-1.117-4.054-2.793a.65.65 0 0 1 .424-.815"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGroupActive;
