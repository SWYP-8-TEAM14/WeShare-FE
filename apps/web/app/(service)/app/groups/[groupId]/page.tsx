import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { GroupService } from "@/domains/group/services/group-service";
import { ItemService } from "@/domains/item/services/item-service";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import GroupInfo from "./_components/group-info";
import GroupItemsPreview from "./_components/group-items-preview";
import NavigationRightMenu from "./_components/navigation-right-menu";

export default async function GroupDetailPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const groupInfo = await GroupService.fetchGroup({
    groupId: parseInt(groupId, 10),
  });
  const items = await ItemService.fetchBookableItems();
  // 만약 관리자일 경우
  const viewRole = groupInfo.isAdmin ? "admin" : "user";
  if (viewRole === "admin") {
    return (
      <Page>
        <TopNavigation>
          <TopNavigationLeft>
            <RouterBackButton />
          </TopNavigationLeft>
          <TopNavigationTitle>그룹 상세</TopNavigationTitle>
        </TopNavigation>
        <GroupInfo
          group={{
            id: groupInfo.id,
            name: groupInfo.name,
            image: groupInfo.image,
            introduction: groupInfo.description,
            members: groupInfo.memberCount,
          }}
          viewerIsOwner
        />
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
      </Page>
    );
  } else {
    return (
      <Page>
        <TopNavigation>
          <TopNavigationLeft>
            <RouterBackButton />
          </TopNavigationLeft>
          <TopNavigationTitle>그룹 상세</TopNavigationTitle>
          <TopNavigationRight>
            <NavigationRightMenu />
          </TopNavigationRight>
        </TopNavigation>
        <GroupInfo
          group={{
            id: groupInfo.id,
            name: groupInfo.name,
            image: groupInfo.image,
            introduction: groupInfo.description,
            members: groupInfo.memberCount,
          }}
          viewerIsOwner={false}
        />
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
      </Page>
    );
  }
}
