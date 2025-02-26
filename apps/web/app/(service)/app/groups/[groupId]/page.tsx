import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { groupData } from "@/domains/group/mocks";
import { groupItems } from "@/domains/item/mocks";
import { EtcIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import GroupInfo from "./_components/group-info";
import GroupItemsPreview from "./_components/group-items-preview";

export default function GroupDetailPage() {
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
        <GroupItemsPreview groupItems={groupItems} />
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
            <IconButton>
              <EtcIcon />
            </IconButton>
          </TopNavigationRight>
        </TopNavigation>
        <GroupInfo group={groupData} viewerIsOwner={false} />
        <GroupItemsPreview groupItems={groupItems} />
      </Page>
    );
  }
}
