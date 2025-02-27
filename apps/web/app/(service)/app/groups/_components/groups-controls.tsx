"use client";
import { DownChevronIcon } from "@repo/icons";
import { Checkbox } from "@repo/ui/checkbox";
import { Label } from "@repo/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface GroupsControlsProps {
  filter: "all" | "own";
  sort: "default" | "many-members";
}

export default function GroupsControls({ filter, sort }: GroupsControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="h-15 flex items-center justify-between w-full">
      <Label className="text-gray-700 flex items-center gap-2 ml-4.5" size="sm">
        <Checkbox
          size="sm"
          checked={filter === "own"}
          onCheckedChange={(checked) => {
            router.replace(
              `${pathname}?${createQueryString("filter", checked ? "own" : "all")}`
            );
          }}
        />
        내가 만든 그룹만 보기
      </Label>
      <div className="mr-2.5">
        <label htmlFor="group-sort" className="relative"></label>
        <div className="relative">
          <select
            name="group-sort"
            id="group-sort"
            className="appearance-none text-body-6 font-semibold text-gray-700 text-right px-8 py-4"
            value={sort}
            onChange={(e) => {
              router.replace(
                `${pathname}?${createQueryString("sort", e.target.value)}`
              );
            }}
          >
            <option value="default">기본순</option>
            <option value="many-members">멤버 많은 순</option>
          </select>
          <DownChevronIcon className="size-4 text-gray-700 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
