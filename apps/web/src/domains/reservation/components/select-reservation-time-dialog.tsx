"use client";
import SelectReservationTime from "@/domains/reservation/components/select-reservation-time";
import { useFetchReservationTimes } from "@/domains/reservation/hooks/use-fetch-reservation-times";
import { ReservationTimeSlot } from "@/domains/reservation/types/reservation-types";
import { formatReservationDateTime } from "@/domains/reservation/utils/date-utils";
import { CloseIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import {
  FullScreenDialog,
  FullScreenDialogClose,
  FullScreenDialogContent,
  FullScreenDialogTitle,
  FullScreenDialogTrigger,
} from "@repo/ui/full-screen-dialog";
import { IconButton } from "@repo/ui/icon-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import React, { useState } from "react";
dayjs.locale("ko");

interface SelectReservationTimeDialogProps {
  defaultTab: "start-time" | "end-time";
  itemId: string;
  children: React.ReactNode;
  defaultStartTime?: string;
  defaultEndTime?: string;
  onConfirm: ({
    startTime,
    endTime,
  }: {
    startTime: string;
    endTime: string;
  }) => void;
}

function findAvailableEndTimes(
  times: ReservationTimeSlot[],
  startTime: string
) {
  const startIndex = times.findIndex(
    (time) => time.slotStartDateTime === startTime
  );

  if (startIndex === -1) {
    return [];
  }

  const availableTimes = times.slice(startIndex).map((time) => ({
    ...time,
    bookable: false,
  }));

  const bookableEndIndex = availableTimes.findIndex(
    (time) => time.slotBookingCount >= time.slotStock
  );

  availableTimes.map((time, index) => {
    if (index < bookableEndIndex) {
      time.bookable = true;
    }
  });

  return availableTimes;
}

export default function SelectReservationTimeDialog({
  children,
  itemId,
  onConfirm,
  defaultStartTime,
  defaultEndTime,
  defaultTab,
}: SelectReservationTimeDialogProps) {
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [endTime, setEndTime] = useState(defaultEndTime);
  const { data: reservationTimes } = useFetchReservationTimes({
    itemId,
  });
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);

  const availableStartTimes = reservationTimes.map((time) => ({
    ...time,
    bookable: time.slotBookingCount < time.slotStock,
  }));

  const availableEndTimes = startTime
    ? findAvailableEndTimes(reservationTimes, startTime)
    : [];

  const handleConfirm = () => {
    if (!startTime || !endTime) {
      return;
    }
    onConfirm({ startTime, endTime });
    setOpen(false);
  };

  const handleChangeStartTime = (time: string) => {
    setStartTime(time);
    setEndTime(undefined);
  };

  const reservationHours = dayjs(endTime).diff(startTime, "hour", true);

  return (
    <FullScreenDialog open={open} onOpenChange={setOpen}>
      <FullScreenDialogTrigger asChild>{children}</FullScreenDialogTrigger>
      <FullScreenDialogContent>
        <TopNavigation>
          <TopNavigationLeft></TopNavigationLeft>
          <TopNavigationTitle>
            <FullScreenDialogTitle>대여/반납 시각</FullScreenDialogTitle>
          </TopNavigationTitle>
          <TopNavigationRight>
            <FullScreenDialogClose asChild>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </FullScreenDialogClose>
          </TopNavigationRight>
        </TopNavigation>
        <Tabs defaultValue={defaultTab} className="flex-1 flex flex-col">
          <TabsList>
            <TabsTrigger value="start-time">대여</TabsTrigger>
            <TabsTrigger value="end-time">반납</TabsTrigger>
          </TabsList>
          <TabsContent value="start-time" className="overflow-y-auto flex-1">
            <div className="h-0">
              <SelectReservationTime
                times={availableStartTimes.map((time) => ({
                  ...time,
                  slotDateTime: time.slotStartDateTime,
                }))}
                selectedTime={startTime || null}
                setSelectedTime={handleChangeStartTime}
                selectedDate={selectedStartDate}
                setSelectedDate={setSelectedStartDate}
              />
            </div>
          </TabsContent>
          <TabsContent value="end-time" className="overflow-y-auto flex-1">
            <div className="h-0">
              <SelectReservationTime
                times={availableEndTimes.map((time) => ({
                  ...time,
                  slotDateTime: time.slotEndDateTime,
                }))}
                selectedTime={endTime || null}
                setSelectedTime={setEndTime}
                selectedDate={selectedEndDate}
                setSelectedDate={setSelectedEndDate}
              />
            </div>
          </TabsContent>
        </Tabs>

        <FixedBottom>
          <div className="py-2.5 px-4.5 flex justify-between items-center border-t border-gray-200">
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2.5 items-center">
                <span className="text-body-6 text-gray-600">대여</span>
                <p className="text-body-4 text-gray-800">
                  {startTime
                    ? formatReservationDateTime(startTime)
                    : "대여 시간을 선택해주세요"}
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="text-body-6 text-gray-600">반납</span>
                <p className="text-body-4 text-gray-800">
                  {endTime
                    ? formatReservationDateTime(endTime)
                    : "반납 시간을 선택해주세요"}
                </p>
              </div>
            </div>
            <div className="text-heading-2 text-gray-800">
              {reservationHours} 시간
            </div>
          </div>
          <FixedBottomActions columns="2" className="border-none">
            <Button
              variant="tertiary"
              size="large"
              onClick={() => {
                setStartTime(undefined);
                setEndTime(undefined);
              }}
            >
              초기화
            </Button>
            <Button
              variant="secondary"
              size="large"
              className="col-span-2"
              disabled={!startTime || !endTime}
              onClick={handleConfirm}
            >
              선택완료
            </Button>
          </FixedBottomActions>
        </FixedBottom>
      </FullScreenDialogContent>
    </FullScreenDialog>
  );
}

// 2025.02.07(금) 오전 10:00 형식으로 출력
