import type { ClassValue } from "clsx";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { createTV } from "tailwind-variants";

const twMergeConfig = {
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "body-1",
            "body-2",
            "body-3",
            "body-4",
            "body-5",
            "body-6",
            "detail-1",
            "detail-2",
            "detail-3",
          ],
        },
      ],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

/**
 * classnames merge
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

/**
 * tailwind styles generator
 */
export const tv = createTV({
  twMergeConfig,
});
