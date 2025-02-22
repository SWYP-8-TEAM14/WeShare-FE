import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { groupsData } from "@/groups/data";
import ItemList from "@/items/components/item-list";
import { groupItems } from "@/items/data";
import { DownChevronIcon } from "@repo/icons";
import { Chip } from "@repo/ui/chip";
import { Search } from "@repo/ui/search";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";

export default function ItemsPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationTitle>공유물품</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white">
        <div className="py-4 px-4.5">
          <Search
            placeholder="검색어를 입력해 주세요"
            aria-label="공유물품 검색"
          />
        </div>
        <div className="pt-1 gap-3.5 flex pb-4 overflow-x-scroll">
          <span className="sr-only">공유 물품 그룹 필터</span>
          <Chip variant="secondary" className="ml-4.5">
            전체
          </Chip>
          {groupsData.map((group) => (
            <Chip key={group.id} variant="tertiary" className="text-body-4">
              {group.groupName}
            </Chip>
          ))}
        </div>
      </div>
      <section className="mt-2 bg-white flex-1">
        <div className="flex justify-between items-center  border-b border-gray-200">
          <span className="text-body-3 text-gray-700 ml-4.5">전체 99개</span>
          <div className="mr-2.5 my-[5px]">
            <label htmlFor="group-sort" className="relative"></label>
            <div className="relative">
              <select
                name="group-sort"
                id="group-sort"
                className="appearance-none text-body-6 font-semibold text-gray-700 text-right px-8 py-4"
              >
                <option value="recent">최근 등록순</option>
              </select>
              <DownChevronIcon className="size-4 text-gray-700 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="mt-3.5">
          <ItemList items={groupItems} />
        </div>
      </section>
      <BottomNavigation currentTab="items" />
    </Page>
  );
}
