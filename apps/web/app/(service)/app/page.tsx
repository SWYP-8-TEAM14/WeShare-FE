import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { ItemService } from "@/domains/item/services/item-service";
import BookableItems from "./_components/bookable-items";
import Header from "./_components/header";
import MainBanners from "./_components/main-banners";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const bookableItems = await ItemService.fetchBookableItems();
  return (
    <Page>
      <Header />
      <MainBanners pickupCount={1} returnCount={2} />
      <BookableItems
        items={bookableItems.map((item) => ({
          id: item.itemId,
          image:
            item.imageUrls[0] || "https://placehold.co/100x100/white/white",
          group: {
            name: item.groupName,
          },
          itemStatus: item.status,
          itemName: item.itemName,
          user: {
            isLiked: item.isWishlist === 1,
          },
        }))}
      />
      <BottomNavigation currentTab="home" />
    </Page>
  );
}
