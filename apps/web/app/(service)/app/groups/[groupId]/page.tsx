import Page from "@/components/page";
import ItemList from "@/items/components/item-list";
import { groupItems } from "@/items/data";
import { BackChevronIcon, RightChevronIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { IconButton } from "@repo/ui/icon-button";
import {
  ListHeader,
  ListHeaderAction,
  ListHeaderTitle,
} from "@repo/ui/list-header";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

const groupData = {
  id: 1,
  name: "🎾테린이들의 테니스 모임🎾",
  image: "https://placehold.co/200",
  introduction:
    "안녕하세요 클럽들어가기도 어렵고 함께 칠 사람도 없어서 만들게 되었습니다 즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나",
  members: 38,
  user: {
    isOwner: true,
  },
  notice:
    "즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나가서 테니스치실분들 모집합니당",
};

export default function GroupDetailPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <BackChevronIcon />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 상세</TopNavigationTitle>
      </TopNavigation>
      <section className="bg-white pt-6.5 px-4.5 pb-8">
        <div className="flex gap-3">
          <Image
            unoptimized
            width={60}
            height={60}
            src={groupData.image}
            alt={groupData.name}
            className="rounded-sm"
          />
          <div>
            <h1 className="text-heading-3 line-clamp-2">{groupData.name}</h1>
            <span className="mt-1.5 text-body-4 text-gray-600">
              멤버수 {groupData.members}
            </span>
          </div>
        </div>

        <hr className="my-3.5 h-px bg-gray-200 border-none" />

        <p className="text-body-2 text-gray-800">{groupData.introduction}</p>
        <div className="mt-4 text-gray-800 rounded-sm bg-gray-100 py-4 px-4.5">
          <p className="text-heading-5">대여시 주의사항</p>
          <p className="mt-2 text-body-5">{groupData.notice}</p>
        </div>
        <div className="mt-5 flex gap-2 mb-8">
          <Button variant="tertiary" fullWidth>
            멤버 초대하기
          </Button>

          <Button variant="secondary" fullWidth asChild>
            <Link href={`/app/groups/${groupData.id}/manage`}>그룹 관리</Link>
          </Button>
        </div>
      </section>
      <section className="mt-2 pt-6.5 bg-white flex-1">
        <ListHeader>
          <ListHeaderTitle>공용물품 리스트</ListHeaderTitle>
          <ListHeaderAction>
            <IconButton>
              <RightChevronIcon />
            </IconButton>
          </ListHeaderAction>
        </ListHeader>
        <div className="mt-4">
          <ItemList items={groupItems} />
        </div>
      </section>
    </Page>
  );
}
