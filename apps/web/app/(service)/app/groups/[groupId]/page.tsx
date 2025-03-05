import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { groupData } from "@/domains/group/mocks";
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

export default async function GroupDetailPage() {
  const items = await ItemService.fetchBookableItems();
  // 만약 관리자일 경우
  const viewRole: "admin" | "user" = Math.random() > 0.5 ? "admin" : "user";
  if (viewRole === "admin") {
    return (
      <Page>
        <TopNavigation>
          <TopNavigationLeft>
            <RouterBackButton />
          </TopNavigationLeft>
          <TopNavigationTitle>그룹 상세</TopNavigationTitle>
        </TopNavigation>
        <GroupInfo group={groupData} viewerIsOwner />
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
        <GroupInfo group={groupData} viewerIsOwner={false} />
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
