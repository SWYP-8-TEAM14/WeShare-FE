import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { FloatingButton } from "@repo/ui/floating-button";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";
import Link from "next/link";
import MyGroups from "./_components/my-groups";

type GroupData = {
  id: number;
  name: string;
  image: string;
  introduction: string;
  members: number;
  user: {
    isOwner: boolean;
  };
};

const groupsData: GroupData[] = [
  {
    id: 1,
    name: "🎾테린이들의 테니스 모임🎾",
    image: "https://placehold.co/200",
    introduction:
      "안녕하세요 클럽들어가기도 어렵고 함께 칠 사람도 없어서 만들게 되었습니다 즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나",
    members: 38,
    user: {
      isOwner: true,
    },
  },
  {
    id: 2,
    name: "도보마포",
    image: "https://placehold.co/200",
    introduction:
      "1. 동네생활에 대해 무엇이든 물어보세요 2. 알고있다면 누구라도 답할 수 있어요 3. 각자의 마포력을 존중해주세요",
    members: 9,
    user: {
      isOwner: false,
    },
  },
  {
    id: 3,
    name: "마포 스크린골프 동호회 (모집중)",
    image: "https://placehold.co/200",
    introduction:
      "마포구민들의 스크린골프 동호회입니다. 스크린골프에 관심있으신 분들 모두 환영합니다!",
    members: 296,
    user: {
      isOwner: false,
    },
  },
];

export default function GroupsPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationTitle>내 그룹</TopNavigationTitle>
      </TopNavigation>
      <MyGroups groups={groupsData} />
      <FixedBottom>
        {groupsData.length !== 0 && (
          <FloatingButton asChild>
            <Link href={`/app/groups/new`}>
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
              그룹 추가하기
            </Link>
          </FloatingButton>
        )}
        <BottomNavigation currentTab="groups" />
      </FixedBottom>
    </Page>
  );
}
