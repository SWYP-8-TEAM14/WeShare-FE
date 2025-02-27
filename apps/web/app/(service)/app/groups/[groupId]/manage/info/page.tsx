import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import GroupInfoForm from "./_components/group-info-form";

export default function GroupInfoManagePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 정보 수정</TopNavigationTitle>
      </TopNavigation>
      <GroupInfoForm />
    </Page>
  );
}
