"use client";
import { useFetchItems } from "@/domains/item/hooks/use-fetch-items";
import useQueryString from "@/hooks/use-query-string";
import { DownChevronIcon } from "@repo/icons";
import { Chip } from "@repo/ui/chip";
import { Search } from "@repo/ui/search";
import { useDebouncedCallback } from "use-debounce";

interface ItemsControlsProps {
  search: string;
  groupFilter: string;
  sort: "recent" | "old";
}

export default function ItemsControls({
  search,
  groupFilter,
  sort,
}: ItemsControlsProps) {
  const { data: items } = useFetchItems({ search, group: groupFilter, sort });
  const { setQueryString } = useQueryString();

  const handleSearch = useDebouncedCallback((value: string) => {
    setQueryString("search", value);
  }, 300);

  const uniqueGroups = items
    .map((item) => ({
      id: item.groupId,
      groupName: item.groupName,
    }))
    .filter(
      (group, index, self) => self.findIndex((g) => g.id === group.id) === index
    );

  const totalItems = items.length;

  return (
    <div>
      <div className="bg-white">
        <div className="py-4 px-4.5">
          <Search
            placeholder="검색어를 입력해 주세요"
            aria-label="공유물품 검색"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={search}
            onClear={() => {
              setQueryString("search", null);
            }}
          />
        </div>
        <div className="pt-1 gap-3.5 flex pb-4 overflow-x-auto">
          <span className="sr-only">공유 물품 그룹 필터</span>
          <Chip
            variant={groupFilter ? "tertiary" : "secondary"}
            className="ml-4.5"
            asChild
          >
            <button
              onClick={() => {
                setQueryString("group", null);
              }}
            >
              전체
            </button>
          </Chip>
          {uniqueGroups.map((group) => (
            <Chip
              key={group.id}
              variant={
                groupFilter === group.id.toString() ? "secondary" : "tertiary"
              }
              className="text-body-4"
              asChild
            >
              <button
                onClick={() => {
                  setQueryString("group", group.id.toString());
                }}
              >
                {group.groupName}
              </button>
            </Chip>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center  border-b border-gray-200 mt-2 bg-white">
        <span className="text-body-3 text-gray-700 ml-4.5">
          전체 {totalItems}개
        </span>
        <div className="mr-2.5 my-[5px]">
          <label htmlFor="group-sort" className="relative"></label>
          <div className="relative">
            <select
              name="group-sort"
              id="group-sort"
              className="appearance-none text-body-6 font-semibold text-gray-700 text-right px-8 py-4"
              value={sort}
              onChange={(e) => {
                setQueryString("sort", e.target.value);
              }}
            >
              <option value="recent">최근 등록순</option>
              <option value="old">오래된 순</option>
            </select>
            <DownChevronIcon className="size-4 text-gray-700 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
