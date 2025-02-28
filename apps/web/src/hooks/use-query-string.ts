import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryString() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const setQueryString = useCallback(
    (name: string, value: string | null) => {
      const queryString = createQueryString(name, value);
      router.replace(`${pathname}?${queryString}`);
    },
    [createQueryString, pathname]
  );

  return { setQueryString, createQueryString };
}
