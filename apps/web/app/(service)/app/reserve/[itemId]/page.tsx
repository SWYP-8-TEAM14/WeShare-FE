import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { ItemService } from "@/domains/item/services/item-service";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import { notFound } from "next/navigation";
import ReservationForm from "./_components/reservation-form";

export default async function ItemReservePage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  try {
    const { itemId } = await params;
    const item = await ItemService.fetchItem(itemId);
    return (
      <Page>
        <TopNavigation>
          <TopNavigationLeft>
            <RouterBackButton />
          </TopNavigationLeft>
          <TopNavigationTitle>예약하기</TopNavigationTitle>
        </TopNavigation>
        <ReservationForm itemDetail={item} />
      </Page>
    );
  } catch {
    notFound();
  }
}
