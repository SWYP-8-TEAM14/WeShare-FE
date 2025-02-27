import Page from "@/components/page";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { FloatingButton } from "@repo/ui/floating-button";
import Link from "next/link";
import GroupItemsForm from "./_components/group-items-form";

export default function GroupManageItemsPage() {
  return (
    <Page>
      <GroupItemsForm />
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
