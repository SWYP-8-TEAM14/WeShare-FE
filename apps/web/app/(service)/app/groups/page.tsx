import Page from "@/components/page";
import { SearchParams } from "@/types/next";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";
import { Suspense } from "react";
import { z } from "zod";
import MyGroups from "./_components/my-groups";

const ParamsSchema = z.object({
  filter: z.enum(["all", "own"]).catch("all"),
  sort: z.enum(["default", "many-members"]).catch("default"),
});

export default async function GroupsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = ParamsSchema.parse(await searchParams);

  return (
    <Page>
      <TopNavigation className="z-20">
        <TopNavigationTitle>내 그룹</TopNavigationTitle>
      </TopNavigation>
      <Suspense fallback={<div />}>
        <MyGroups filter={params.filter} sort={params.sort} />
      </Suspense>
    </Page>
  );
}
