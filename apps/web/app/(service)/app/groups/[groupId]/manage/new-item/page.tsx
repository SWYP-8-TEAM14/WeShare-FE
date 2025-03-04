import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import CreateItemForm from "./_components/create-item-form";

export default async function GroupNewItemPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>물품 추가</TopNavigationTitle>
      </TopNavigation>
      <CreateItemForm groupId={groupId} />
    </Page>
  );
}
