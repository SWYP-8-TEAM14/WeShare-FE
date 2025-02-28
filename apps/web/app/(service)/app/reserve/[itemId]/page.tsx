import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import ReservationForm from "./_components/reservation-form";

export default function ItemReservePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>예약하기</TopNavigationTitle>
      </TopNavigation>
      <ReservationForm />
    </Page>
  );
}
