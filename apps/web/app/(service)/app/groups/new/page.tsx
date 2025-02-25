import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import CreateGroupForm from "./_components/create-group-form";

export default function GroupCreatePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 생성</TopNavigationTitle>
      </TopNavigation>
      <CreateGroupForm />
    </Page>
  );
}
