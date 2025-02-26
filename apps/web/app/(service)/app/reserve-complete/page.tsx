import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { reservationData } from "@/domains/reservation/mocks";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function ReserveCompletePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>예약완료</TopNavigationTitle>
      </TopNavigation>

      <div className="py-9 px-4.5 bg-white">
        <div className="w-19.5 h-19.5 rounded-full bg-primary-500 flex items-center justify-center mx-auto">
          <svg
            width="43"
            height="29"
            viewBox="0 0 43 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 12L17 25.5C17 25.5 33.1667 9.33333 39.5 3"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-heading-2 mt-4 text-center">예약이 완료되었어요!</p>

        <div className="mt-6.5 bg-gray-100 py-4 px-4.5 rounded-md">
          <div className="flex items-center gap-3">
            <Image
              unoptimized
              src={reservationData.itemDetail.images[0]!}
              alt={reservationData.itemDetail.itemName}
              width={74}
              height={74}
              className="rounded-sm"
            />

            <div className="flex flex-col gap-1.5">
              <span className="text-body-6 text-gray-600">
                {reservationData.itemDetail.group.name}
              </span>
              <p className="text-body-1">
                {reservationData.itemDetail.itemName}
              </p>
              <span className="text-body-4 text-gray-700">
                {reservationData.itemDetail.quantity}개
              </span>
            </div>
          </div>

          <div className="mt-6.5 flex flex-col gap-2">
            <div>
              <span className="text-body-6 text-gray-600">대여시각</span>
              <p className="text-heading-2 text-gray-800 mt-1">
                {reservationData.reservationTime.pickupTime}
              </p>
            </div>
            <div>
              <span className="text-body-6 text-gray-600">대여시각</span>
              <p className="text-heading-2 text-gray-800 mt-1">
                {reservationData.reservationTime.pickupTime}
              </p>
            </div>
          </div>

          <hr className="my-4 border-t border-gray-200" />

          <div className="py-4 flex justify-between items-center">
            <span className="text-heading-2 text-gray-800">총 대여시간</span>
            <p className="text-heading-2 text-gray-800">
              {reservationData.reservationTime.duration} 시간
            </p>
          </div>
        </div>

        <Link
          href="/app/profile/reservations"
          className="text-gray-700 text-body-6 mt-6.5 block text-center"
        >
          예약 내역 보기
        </Link>
      </div>

      <FixedBottom>
        <FixedBottomActions>
          <Button variant="secondary" size="large">
            홈으로
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
