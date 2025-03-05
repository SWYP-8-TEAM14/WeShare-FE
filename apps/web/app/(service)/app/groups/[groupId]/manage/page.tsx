import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { membersData } from "@/domains/group/mocks";
import { ItemService } from "@/domains/item/services/item-service";
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

export default async function GroupManagePage() {
  const items = await ItemService.fetchBookableItems();
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
        <GroupItemsPreview
          groupItems={items.map((item) => ({
            id: item.itemId,
            image:
              item.imageUrls[0] || "https://placehold.co/100x100/white/white",
            group: {
              name: item.groupName,
            },
            itemStatus: item.status,
            itemName: item.itemName,
            user: {
              isLiked: item.isWishlist === 1,
            },
          }))}
        />
      </section>
    </Page>
  );
}
