import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { reservationDetail } from "@/reservations/data";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";

export default function ReservationDetailsPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>내역 상세</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white px-4.5 py-6.5 flex items-center gap-3">
        <Image
          unoptimized
          src={reservationDetail.itemDetail.images[0]!}
          alt=""
          width={74}
          height={74}
          className="rounded-sm"
        />
        <div className="flex flex-col gap-1.5">
          <span className="text-body-6 text-gray-600">
            {reservationDetail.itemDetail.group.name}
          </span>
          <span className="text-body-1">
            {reservationDetail.itemDetail.itemName}
          </span>
          <span className="text-body-4 text-gray-700">
            {reservationDetail.itemDetail.quantity}개
          </span>
        </div>
      </div>
      <div className="mt-2 bg-white px-4.5 py-5">
        <span className="text-body-4 text-gray-600 mr-6">예약시각</span>
        <span className="text-body-3 text-gray-800">
          {reservationDetail.pickupTime}
        </span>
      </div>
      <div className="mt-2 bg-white px-4.5 py-5">
        <span className="text-body-4 text-gray-600 mr-6">픽업완료</span>
        <span className="text-body-3 text-gray-800">
          {reservationDetail.pickupInfo.time}
        </span>
        <div className="mt-4 flex gap-2">
          {reservationDetail.pickupInfo.images.map((image, index) => (
            <Image
              key={index}
              unoptimized
              src={image}
              alt=""
              width={74}
              height={74}
              className="rounded-sm border border-black/10 w-20 h-20 aspect-square"
            />
          ))}
        </div>
      </div>
      <div className="mt-2 bg-white px-4.5 py-5">
        <span className="text-body-4 text-gray-600 mr-6">반납완료</span>
        <span className="text-body-3 text-gray-800">
          {reservationDetail.returnInfo.time}
        </span>
        <div className="mt-4 flex gap-2">
          {reservationDetail.returnInfo.images.map((image, index) => (
            <Image
              key={index}
              unoptimized
              src={image}
              alt=""
              width={74}
              height={74}
              className="rounded-sm border border-black/10 w-20 h-20 aspect-square"
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
