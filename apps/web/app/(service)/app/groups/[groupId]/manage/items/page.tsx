import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { itemsOfGroup } from "@/domains/item/mocks";
import { Checkbox } from "@repo/ui/checkbox";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { FloatingButton } from "@repo/ui/floating-button";
import { Label } from "@repo/ui/label";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function GroupManageItemsPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹물품 관리</TopNavigationTitle>
      </TopNavigation>
      <div className="flex-1 bg-white">
        <div className="py-6.5 flex flex-col px-4.5">
          <div className="flex justify-between items-center">
            <span className="text-heading-5 text-gray-800">그룹물품 10</span>
            <button className="text-gray-700 text-body-6">전체 선택</button>
          </div>
        </div>
        <div className="mt-3">
          {itemsOfGroup.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-2 px-4.5">
              <Image
                unoptimized
                width={74}
                height={74}
                src={item.image}
                alt={item.itemName}
                className="rounded-sm"
              />
              <div className="flex-1 mt-3">
                <div className="flex">
                  <span className="text-gray-600 text-body-6 line-clamp-1">
                    {item.groupName}
                  </span>
                  <span className="text-primary text-body-6 ml-1.5 font-semibold">
                    {item.itemStatus}
                  </span>
                </div>
                <p className="text-body-1 mt-1.5 line-clamp-2">
                  {item.itemName}
                </p>
              </div>
              <div className="flex items-center">
                <Label htmlFor={`item-${item.id}`} className="sr-only">
                  {item.itemName} 선택
                </Label>
                <Checkbox
                  id={`item-${item.id}`}
                  name={`item-${item.id}`}
                  value={item.id}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FixedBottom>
        <FloatingButton asChild>
          <Link href={`/app/groups/1/manage/new-item`}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn/plus">
                <path
                  id="Union"
                  d="M7 1.75C6.59729 1.75 6.27083 2.07646 6.27083 2.47917V6.27079L2.47917 6.27079C2.07646 6.27079 1.75 6.59725 1.75 6.99996C1.75 7.40267 2.07646 7.72913 2.47917 7.72913H6.27083V11.5208C6.27083 11.9235 6.59729 12.25 7 12.25C7.40271 12.25 7.72917 11.9235 7.72917 11.5208V7.72913H11.5208C11.9235 7.72913 12.25 7.40267 12.25 6.99996C12.25 6.59725 11.9235 6.27079 11.5208 6.27079H7.72917V2.47917C7.72917 2.07646 7.40271 1.75 7 1.75Z"
                  fill="currentColor"
                />
              </g>
            </svg>
            물품 추가하기
          </Link>
        </FloatingButton>
      </FixedBottom>
    </Page>
  );
}
