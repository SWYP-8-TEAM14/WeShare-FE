import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import ItemList from "@/items/components/item-list";
import { bookableItems } from "@/items/data";
import Image from "next/image";
import Link from "next/link";

export default function AppPage() {
  return (
    <Page>
      <Headers />
      <MainBanners />
      <BookableItems />
      <BottomNavigation currentTab="home" />
    </Page>
  );
}

export function Headers() {
  return (
    <div>
      <div className="px-4.5 py-2 h-12.5 flex items-center justify-between">
        <Image
          unoptimized
          src="/logo_small.svg"
          width={124}
          height={44}
          alt="weshare"
        />
      </div>
    </div>
  );
}

export function MainBanners() {
  return (
    <div className="pt-5 px-4.5 pb-11 grid grid-cols-2 grid-rows-2 gap-3">
      <Link
        href="/app/items"
        className="shadow-main-banner bg-white row-span-2 pt-4 pl-4 pr-2 pb-2 rounded-md flex flex-col"
      >
        <p className="text-heading-3">예약하기</p>
        <p className="text-body-6 text-gray-600 mt-1">편리하게 예약하기</p>
        <div className="flex-1 flex justify-end items-end">
          <Image
            unoptimized
            src="/images/banner-1.png"
            width={83}
            height={83}
            alt="calendar"
            className=""
          />
        </div>
      </Link>
      <Link
        href="/app/profile/reservations?status=upcoming"
        className="shadow-main-banner bg-white flex rounded-md"
      >
        <p className="text-heading-3 mt-4 ml-4">픽업하기</p>

        <Image
          unoptimized
          src="/images/banner-2.png"
          width={83}
          height={83}
          alt="pickup"
          className="ml-auto"
        />
      </Link>
      <Link
        href="/app/profile/reservations?status=return"
        className="shadow-main-banner bg-white flex rounded-md"
      >
        <p className="text-heading-3 mt-4 ml-4">반납하기</p>
        <div className="ml-auto mr-[17px] my-[17px]">
          <Image
            unoptimized
            src="/images/banner-3.png"
            width={55}
            height={49}
            alt="return"
          />
        </div>
      </Link>
    </div>
  );
}

export function BookableItems() {
  return (
    <div className="rounded-t-lg bg-white pt-7.5 shadow-[0_-3px_12px_0px_rgba(0,0,0,0.05)] flex-1 flex flex-col">
      <h2 className="text-heading-4 mx-4.5">예약 가능한 물품</h2>
      <div className="mt-2.5">
        <ItemList items={bookableItems} />
      </div>

      {bookableItems.length === 0 && (
        <div className="flex flex-col items-center justify-center grow-1 mt-5 h-full">
          <p className="text-body-2 text-gray-500">
            현재 예약 가능한 물품이 없어요.
          </p>
        </div>
      )}
    </div>
  );
}
