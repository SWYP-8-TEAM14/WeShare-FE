import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { SearchParams } from "@/types/next";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import { z } from "zod";
import ReservationHistory from "./_components/reservation-history";

const searchParamsSchema = z.object({
  tab: z.enum(["all", "reserved", "rented", "returned"]).catch("all"),
});

export default async function UserReservationsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = searchParamsSchema.parse(await searchParams);
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>예약/대여 현황</TopNavigationTitle>
      </TopNavigation>

      <ReservationHistory tab={params.tab} />
    </Page>
  );
}
