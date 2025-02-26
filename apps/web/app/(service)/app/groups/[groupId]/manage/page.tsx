import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { membersData } from "@/domains/group/mocks";
import { groupItems } from "@/domains/item/mocks";
import { RightChevronIcon } from "@repo/icons";
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
import Link from "next/link";
import GroupItemsPreview from "./_components/group-items-preview";
import GroupManageHeader from "./_components/group-manage-header";
import GroupMembersPreview from "./_components/group-members-preview";

const groupManageData = {
  id: 1,
  name: "🎾테린이들의 테니스 모임🎾",
  image: "https://placehold.co/200",
  introduction:
    "안녕하세요 클럽들어가기도 어렵고 함께 칠 사람도 없어서 만들게 되었습니다 즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나",
  members: 38,
  items: 10,
  user: {
    isOwner: true,
  },
};

export default function GroupManagePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 관리</TopNavigationTitle>
      </TopNavigation>
      <h1 className="sr-only">{groupManageData.name} 그룹 관리</h1>
      <GroupManageHeader groupInfo={groupManageData} />

      <section className="mt-2 pt-6.5 pb-8 bg-white">
        <Link href={`/app/groups/${groupManageData.id}/manage/members`}>
          <ListHeader>
            <ListHeaderTitle>
              그룹멤버 {groupManageData.members}
            </ListHeaderTitle>
            <ListHeaderAction>
              <IconButton>
                <RightChevronIcon />
              </IconButton>
            </ListHeaderAction>
          </ListHeader>
        </Link>
        <GroupMembersPreview members={membersData} />
      </section>

      <section className="mt-2 pt-6.5 bg-white flex-1">
        <Link href={`/app/groups/${groupManageData.id}/manage/items`}>
          <ListHeader>
            <ListHeaderTitle>
              공용물품 리스트 {groupManageData.items}
            </ListHeaderTitle>
            <ListHeaderAction>
              <IconButton>
                <RightChevronIcon />
              </IconButton>
            </ListHeaderAction>
          </ListHeader>
        </Link>
        <GroupItemsPreview groupItems={groupItems} />
      </section>
    </Page>
  );
}
