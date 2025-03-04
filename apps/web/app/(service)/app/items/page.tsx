import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { SearchParams } from "@/types/next";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";
import { Suspense } from "react";
import { z } from "zod";
import ItemsControls from "./_components/items-controls";
import MyItems from "./_components/my-items";

const ParamsSchema = z.object({
  search: z.string().optional().default(""),
  group: z.string().optional().default(""),
  sort: z.enum(["recent", "old"]).catch("recent"),
});

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = ParamsSchema.parse(await searchParams);

  return (
    <Page>
      <TopNavigation>
        <TopNavigationTitle>공유물품</TopNavigationTitle>
      </TopNavigation>
      <Suspense fallback={<div>Loading...</div>}>
        <ItemsControls
          search={params.search}
          groupFilter={params.group}
          sort={params.sort}
        />
      </Suspense>
      <section className="bg-white flex-1 pt-3.5">
        <Suspense fallback={<div>Loading...</div>}>
          <MyItems
            search={params.search}
            groupFilter={params.group}
            sort={params.sort}
          />
        </Suspense>
      </section>
      <BottomNavigation currentTab="items" />
    </Page>
  );
}
