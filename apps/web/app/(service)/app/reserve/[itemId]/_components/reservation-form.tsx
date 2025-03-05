"use client";
import SelectReservationTimeDialog from "@/domains/reservation/components/select-reservation-time-dialog";
import { useReservationForm } from "@/domains/reservation/hooks/use-reservation-form";
import { useReserveItem } from "@/domains/reservation/hooks/use-reserve-item";
import { formatReservationDateTime } from "@/domains/reservation/utils/date-utils";
import useFormId from "@/hooks/use-form-id";
import { CloseIcon, RightChevronIcon } from "@repo/icons";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@repo/ui/bottom-sheet";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { IconButton } from "@repo/ui/icon-button";
import dayjs from "dayjs";
import Image from "next/image";
import { Suspense } from "react";

interface ReservationFormProps {
  itemDetail: {
    userId: number;
    username: string;
    groupId: number;
    groupName: string;
    itemId: number;
    itemName: string;
    pickupPlace: string;
    returnPlace: string;
    itemDescription: string;
    imageUrls: string[];
    status: number;
    quantity: number;
    caution: string;
    createdAt: string;
  };
}

export default function ReservationForm({ itemDetail }: ReservationFormProps) {
  const formId = useFormId();
  const reserveItem = useReserveItem();
  const reservationForm = useReservationForm();

  const onSubmit = reservationForm.handleSubmit((data) => {
    console.log(data);
    // reserveItem.mutate(data);
  });

  const startTime = reservationForm.watch("startTime");
  const endTime = reservationForm.watch("endTime");

  const reservationHours = dayjs(endTime).diff(startTime, "hour", true);

  const submitButtonDisabled = !startTime || !endTime;

  return (
    <>
      <div className="bg-white px-4.5 py-6.5 flex items-center gap-3">
        <Image
          unoptimized
          src={itemDetail.imageUrls[0]!}
          alt={itemDetail.itemName}
          width={74}
          height={74}
          className="rounded-sm"
        />

        <div className="flex flex-col gap-1.5">
          <span className="text-body-6 text-gray-600">
            {itemDetail.groupName}
          </span>
          <p className="text-body-1">{itemDetail.itemName}</p>
          <span className="text-body-4 text-gray-700">
            {itemDetail.quantity}개
          </span>
        </div>
      </div>
      <div className="px-4.5 pb-7 bg-white">
        <div className="p-4 rounded-sm bg-gray-100 flex flex-col gap-2">
          <div>
            <span className="text-body-6 text-gray-600">픽업 장소</span>
            <p className="text-heading-2 mt-1.5 text-gray-800">
              {itemDetail.pickupPlace}
            </p>
          </div>
          <div>
            <span className="text-body-6 text-gray-600">반납 장소</span>
            <p className="text-heading-2 mt-1.5 text-gray-800">
              {itemDetail.returnPlace}
            </p>
          </div>
        </div>
      </div>
      <form
        id={formId}
        className="mt-2 bg-white py-6.5 px-4.5 flex flex-col"
        onSubmit={onSubmit}
      >
        <span className="text-heading-5 text-gray-800">예약 시간</span>

        <div className="flex justify-between items-center mt-3">
          <span className="text-body-1 text-gray-800">대여시각</span>
          <Suspense fallback={<div>로딩중...</div>}>
            <SelectReservationTimeDialog
              defaultTab="start-time"
              defaultStartTime={startTime}
              defaultEndTime={endTime}
              itemId={itemDetail.itemId.toString()}
              onConfirm={(times) => {
                reservationForm.setValue("startTime", times.startTime);
                reservationForm.setValue("endTime", times.endTime);
              }}
            >
              <button className="flex items-center gap-1.5 my-4.5">
                {startTime ? (
                  <span className="text-heading-4 text-gray-900">
                    {formatReservationDateTime(startTime)}
                  </span>
                ) : (
                  <span className="text-heading-4 text-gray-500">
                    대여시각을 선택해 주세요
                  </span>
                )}
                <RightChevronIcon className="size-4.5 text-gray-700" />
              </button>
            </SelectReservationTimeDialog>
          </Suspense>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-body-1 text-gray-800">반납시각</span>
          <Suspense fallback={<div>로딩중...</div>}>
            <SelectReservationTimeDialog
              defaultTab="end-time"
              defaultStartTime={startTime}
              defaultEndTime={endTime}
              itemId={itemDetail.itemId.toString()}
              onConfirm={(times) => {
                reservationForm.setValue("startTime", times.startTime);
                reservationForm.setValue("endTime", times.endTime);
              }}
            >
              <button className="flex items-center gap-1.5 my-4.5">
                {endTime ? (
                  <span className="text-heading-4 text-gray-900">
                    {formatReservationDateTime(endTime)}
                  </span>
                ) : (
                  <span className="text-heading-4 text-gray-500">
                    반납시각을 선택해 주세요
                  </span>
                )}
                <RightChevronIcon className="size-4.5 text-gray-700" />
              </button>
            </SelectReservationTimeDialog>
          </Suspense>
        </div>

        <hr className="h-px bg-gray-200 border-none" />

        <div className="flex justify-between items-center py-4.5">
          <span className="text-heading-2 text-gray-800">총 대여시간</span>
          <p className="text-heading-2 text-gray-800">{reservationHours}시간</p>
        </div>

        <div className="mt-3">
          <div className="rounded-sm bg-gray-100 py-4 px-4.5">
            <p className="text-heading-5 text-gray-800">대여 시 주의사항</p>
            <p className="mt-2 text-body-2 text-gray-700">
              {itemDetail.caution}
            </p>
          </div>
        </div>
      </form>
      <FixedBottom>
        <FixedBottomActions>
          <BottomSheet>
            <BottomSheetTrigger asChild>
              <Button
                form={formId}
                size="large"
                variant="primary"
                disabled={submitButtonDisabled}
              >
                예약하기
              </Button>
            </BottomSheetTrigger>
            <BottomSheetContent>
              <BottomSheetHeader>
                <BottomSheetTitle>최종 예약 일시</BottomSheetTitle>
                <BottomSheetDescription className="sr-only">
                  최종 예약 일시를 확인하세요.
                </BottomSheetDescription>
                <BottomSheetClose asChild>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </BottomSheetClose>
              </BottomSheetHeader>
              <div className="px-4.5 pt-3.5 pb-10 flex flex-col gap-6.5">
                <div className="bg-white flex items-center gap-3">
                  <Image
                    unoptimized
                    src={itemDetail.imageUrls[0]!}
                    alt={itemDetail.itemName}
                    width={74}
                    height={74}
                    className="rounded-sm"
                  />

                  <div className="flex flex-col gap-1.5">
                    <span className="text-body-6 text-gray-600">
                      {itemDetail.groupName}
                    </span>
                    <p className="text-body-1">{itemDetail.itemName}</p>
                    <span className="text-body-4 text-gray-700">
                      {itemDetail.quantity}개
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-body-6 text-gray-600">대여시각</span>
                    <p className="text-heading-2 text-gray-800">
                      {formatReservationDateTime(startTime)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-body-6 text-gray-600">반납시각</span>
                    <p className="text-heading-2 text-gray-800">
                      {formatReservationDateTime(endTime)}
                    </p>
                  </div>
                </div>
              </div>
              <FixedBottomActions>
                <Button
                  form={formId}
                  size="large"
                  variant="secondary"
                  type="submit"
                >
                  최종 예약하기
                </Button>
              </FixedBottomActions>
            </BottomSheetContent>
          </BottomSheet>
        </FixedBottomActions>
      </FixedBottom>
    </>
  );
}
