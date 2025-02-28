import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { groupItems } from "@/domains/item/mocks";
import BookableItems from "./_components/bookable-items";
import Header from "./_components/header";
import MainBanners from "./_components/main-banners";

export default function AppPage() {
  return (
    <Page>
      <Header />
      <MainBanners pickupCount={1} returnCount={2} />
      <BookableItems items={groupItems.slice(0, 6)} />
      <BottomNavigation currentTab="home" />
    </Page>
  );
}
