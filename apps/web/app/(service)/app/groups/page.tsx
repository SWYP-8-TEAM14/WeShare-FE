import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import GroupCreateDialog from "@/groups/components/group-create-dialog";
import { DownChevronIcon } from "@repo/icons";
import { Checkbox } from "@repo/ui/checkbox";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { Label } from "@repo/ui/label";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex-1 flex flex-col items-center justify-center">
        {groupsData.length === 0 ? (
          <div className="flex flex-col items-center">
            <h3 className="text-heading-4 text-center">
              아직 내 그룹이 없어요!
            </h3>
            <p className="text-body-5 text-gray-800 text-center  mt-2">
              그룹을 만들어 멤버들과 함께 공용 물품을 관리해보세요!
            </p>
            <button className="mt-8 rounded-full px-2.5 py-[13px] border border-black/10 bg-white w-[130px] text-body-3 text-gray-700">
              그룹 생성하기
            </button>
          </div>
        ) : (
          <>
            <div className="h-15 flex items-center justify-between w-full">
              <Label
                className="text-gray-700 flex items-center gap-2 ml-4.5"
                size="sm"
              >
                <Checkbox size="sm" />
                내가 만든 그룹만 보기
              </Label>
              <div className="mr-2.5">
                <label htmlFor="group-sort" className="relative"></label>
                <div className="relative">
                  <select
                    name="group-sort"
                    id="group-sort"
                    className="appearance-none text-body-6 font-semibold text-gray-700 text-right px-8 py-4"
                  >
                    <option value="default">기본순</option>
                    <option value="most_member">멤버 많은 순</option>
                  </select>
                  <DownChevronIcon className="size-4 text-gray-700 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 bg-white pt-3">
              {groupsData.map((group, index) => (
                <Link
                  key={group.id}
                  href={`/app/groups/${group.id}`}
                  className="flex gap-2 justify-between px-4.5 py-2"
                >
                  <Image
                    unoptimized
                    src={group.image}
                    width={74}
                    height={74}
                    alt="group"
                    className="rounded-sm"
                  />
                  <div className="flex-1">
                    <p className="text-heading-3 line-clamp-1">{group.name}</p>
                    <p className="text-body-5 text-gray-800 line-clamp-1 mt-1">
                      {group.introduction}
                    </p>
                    <span className="text-detail-2 text-gray-600 mt-1.5">
                      멤버수 {group.members}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <FixedBottom>
        <GroupCreateDialog />
        <BottomNavigation currentTab="groups" />
      </FixedBottom>
    </Page>
  );
}
