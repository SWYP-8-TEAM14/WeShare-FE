import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { groupData } from "@/groups/data";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";

export default function InvitePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>초대링크로 시작하기</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white flex-1 flex flex-col gap-6.5 items-center justify-center px-4.5">
        <p className="text-heading-1 text-gray-800">아래 그룹에 참여할까요?</p>
        <div className="bg-gray-100 rounded-md p-5 flex gap-2 items-center justify-between">
          <Image
            unoptimized
            width={74}
            height={74}
            src={groupData.image}
            alt="group"
            className="rounded-sm"
          />
          <div>
            <p className="text-heading-3">{groupData.name}</p>
            <p className="text-body-5 text-gray-800 mt-1 line-clamp-2">
              {groupData.introduction}
            </p>
            <p className="text-detail-2 text-gray-600 mt-1.5">
              멤버수 {groupData.members}
            </p>
          </div>
        </div>
      </div>
      <FixedBottom>
        <FixedBottomActions>
          <Button size="large" fullWidth>
            그룹에 참여하기
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
