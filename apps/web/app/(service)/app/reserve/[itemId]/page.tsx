import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { itemDetail } from "@/domains/item/mocks";
import SelectReservationTimeDialog from "@/domains/reservation/components/select-reservation-time-dialog";
import { RightChevronIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function ItemReservePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>예약하기</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white px-4.5 py-6.5 flex items-center gap-3">
        <Image
          unoptimized
          src={itemDetail.images[0]!}
          alt={itemDetail.itemName}
          width={74}
          height={74}
          className="rounded-sm"
        />

        <div className="flex flex-col gap-1.5">
          <span className="text-body-6 text-gray-600">
            {itemDetail.group.name}
          </span>
          <p className="text-body-1">{itemDetail.itemName}</p>
          <span className="text-body-4 text-gray-700">
            {itemDetail.quantity}개
          </span>
        </div>
      </div>
      <div className="px-4.5 pb-7 bg-white">
        <div className="p-4 rounded-sm bg-gray-100 grid grid-cols-2 gap-2">
          <div>
            <span className="text-body-6 text-gray-600">픽업 장소</span>
            <p className="text-heading-2 mt-1.5 text-gray-800">
              {itemDetail.pickupLocation}
            </p>
          </div>
          <div>
            <span className="text-body-6 text-gray-600">반납 장소</span>
            <p className="text-heading-2 mt-1.5 text-gray-800">
              {itemDetail.returnLocation}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-white py-6.5 px-4.5 flex flex-col">
        <span className="text-heading-5 text-gray-800">예약 시간</span>

        <div className="flex justify-between items-center mt-3">
          <span className="text-body-1 text-gray-800">대여시각</span>
          <SelectReservationTimeDialog>
            <button className="flex items-center gap-1.5 my-4.5">
              <span className="text-heading-4 text-gray-500">
                대여시각을 선택해 주세요
              </span>
              <RightChevronIcon className="size-4.5 text-gray-700" />
            </button>
          </SelectReservationTimeDialog>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-body-1 text-gray-800">반납시각</span>
          <SelectReservationTimeDialog>
            <button className="flex items-center gap-1.5 my-4.5">
              <span className="text-heading-4 text-gray-500">
                반납시각을 선택해 주세요
              </span>
              <RightChevronIcon className="size-4.5 text-gray-700" />
            </button>
          </SelectReservationTimeDialog>
        </div>

        <hr className="h-px bg-gray-200 border-none" />

        <div className="flex justify-between items-center py-4.5">
          <span className="text-heading-2 text-gray-800">총 대여시간</span>
          <p className="text-heading-2 text-gray-800">0시간</p>
        </div>

        <div className="mt-3">
          <div className="rounded-sm bg-gray-100 py-4 px-4.5">
            <p className="text-heading-5 text-gray-800">대여 시 주의사항</p>
            <p className="mt-2 text-body-2 text-gray-700">
              {itemDetail.caution}
            </p>
          </div>
        </div>
      </div>
      <FixedBottom>
        <FixedBottomActions>
          <Button size="large" variant="primary" asChild>
            <Link href={`/app/reserve-complete`}>예약하기</Link>
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
