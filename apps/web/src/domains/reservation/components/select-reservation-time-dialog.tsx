import { availableReservationTimeSlots } from "@/domains/reservation/mocks";
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
import React from "react";

export default function SelectReservationTimeDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FullScreenDialog>
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
        <Tabs defaultValue="start-time">
          <TabsList>
            <TabsTrigger value="start-time">대여</TabsTrigger>
            <TabsTrigger value="end-time">반납</TabsTrigger>
          </TabsList>
          <TabsContent value="start-time">
            <div className="mt-6.5 flex flex-col gap-6.5">
              {/* 날짜 선택 */}
              <div>
                <span className="text-heading-5 mx-4.5">날짜</span>
                <div className="mt-3 flex gap-2 overflow-x-auto px-4.5">
                  {availableReservationTimeSlots.map((timeSlot) => (
                    <div
                      key={timeSlot.date}
                      className="flex items-center gap-2 border border-black/10 rounded-sm py-3.5 px-2.5"
                    >
                      <label className="flex flex-col items-center gap-0.5">
                        {/* 요일을 한글로 표시 ex.목, 금, 토 */}
                        <span className="text-body-4 text-gray-700">
                            {new Date(timeSlot.date).toLocaleDateString(
                              "ko-KR",
                              {
                            weekday: "short",
                              }
                            )}
                        </span>
                        {/* 날짜를 MM/DD 형식으로 표시 */}
                        <span className="text-body-3 text-gray-800">
                          {timeSlot.date.slice(5).replace("-", "/")}
                        </span>
                        <input hidden type="radio" name="reservation-date" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* 시간 선택 오전 */}
              <div>
                <span className="text-heading-5 mx-4.5">오전</span>
                <div className="mt-3 grid grid-cols-3 gap-[9px] px-4.5">
                  {availableReservationTimeSlots[0]!.availableTimes
                    .filter((time) => {
                      return time < "12:00";
                    })
                    .map((time) => (
                      <div
                        key={time}
                        className="flex justify-center items-center gap-2 border border-black/10 rounded-sm py-3 px-2 h-11"
                      >
                        <label className="">
                          <input
                            hidden
                            type="checkbox"
                            name="reservation-time"
                            value={time}
                          />
                          <span className="text-body-4 text-gray-800">
                            {time}
                          </span>
                        </label>
                      </div>
                    ))}
                </div>
              </div>

              {/* 시간 선택 오후 */}
              <div>
                <span className="text-heading-5 mx-4.5">오후</span>
                <div className="mt-3 grid grid-cols-3 gap-[9px] px-4.5">
                  {availableReservationTimeSlots[0]!.availableTimes
                    .filter((time) => {
                      return time >= "12:00";
                    })
                    .map((time) => (
                      <div
                        key={time}
                        className="flex justify-center items-center gap-2 border border-black/10 rounded-sm py-3 px-2 h-11"
                      >
                        <label className="">
                          <input
                            hidden
                            type="checkbox"
                            name="reservation-time"
                            value={time}
                          />
                          <span className="text-body-4 text-gray-800">
                            {time}
                          </span>
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="end-time">반납 시각 컨텐츠</TabsContent>
        </Tabs>

        <FixedBottom>
          <FixedBottomActions columns="2">
            <Button variant="tertiary" size="large">
              초기화
            </Button>
            <Button variant="secondary" size="large" className="col-span-2">
              선택완료
            </Button>
          </FixedBottomActions>
        </FixedBottom>
      </FullScreenDialogContent>
    </FullScreenDialog>
  );
}
