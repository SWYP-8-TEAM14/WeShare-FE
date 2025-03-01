"use client";
import MultipleImageUploader from "@/components/multiple-image-uploader";
import { reservationHistory } from "@/domains/reservation/mocks";
import useQueryString from "@/hooks/use-query-string";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@repo/ui/bottom-sheet";
import { Button } from "@repo/ui/button";
import { FixedBottomActions } from "@repo/ui/fixed-bottom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReservationHistoryControls from "./reservation-history-controls";

interface ReservationHistoryProps {
  tab: "all" | "reserved" | "rented" | "returned";
}

export default function ReservationHistory({ tab }: ReservationHistoryProps) {
  const [groupFilter, setGroupFilter] = useState<number[]>([]);
  const [sort, setSort] = useState<"recent" | "returned">("recent");
  const { setQueryString } = useQueryString();
  const [images, setImages] = useState<File[]>([]);
  const onChangeTab = (value: string) => {
    setQueryString("tab", value);
  };

  return (
    <Tabs defaultValue={tab} onValueChange={onChangeTab}>
      <div className="bg-white">
        <TabsList>
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="reserved">예약/픽업</TabsTrigger>
          <TabsTrigger value="rented">대여 중</TabsTrigger>
          <TabsTrigger value="returned">반납</TabsTrigger>
        </TabsList>
      </div>
      {["all", "reserved", "rented", "returned"].map((status) => {
        const reservations =
          status === "all"
            ? reservationHistory
            : reservationHistory.filter(
                (reservation) => reservation.status === status
              );

        return (
          <TabsContent key={status} value={status}>
            <ReservationHistoryControls
              groupFilter={groupFilter}
              setGroupFilter={setGroupFilter}
              sort={sort}
              setSort={setSort}
            />
            <div className="py-6 px-4.5 flex flex-col gap-5">
              {reservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="py-4 px-4.5 bg-white border border-black/10 rounded-md flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center gap-2 ">
                    {reservation.status === "reserved" ? (
                      <span className="text-heading-4 text-primary-500">
                        예약/픽업
                      </span>
                    ) : reservation.status === "rented" ? (
                      <span className="text-heading-4 text-primary-800">
                        대여 중
                      </span>
                    ) : (
                      <span className="text-heading-4 text-gray-600">
                        반납완료
                      </span>
                    )}
                    <span className="text-detail-2 text-gray-600">
                      {reservation.pickupTime}
                    </span>
                  </div>
                  <Link
                    className="mt-2 flex items-center gap-3"
                    href={`/app/profile/reservations/${reservation.id}`}
                  >
                    <Image
                      unoptimized
                      src={reservation.itemDetail.images[0]!}
                      alt=""
                      width={74}
                      height={74}
                      className="rounded-sm"
                    />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-body-6 text-gray-600">
                        {reservation.itemDetail.group.name}
                      </span>
                      <span className="text-body-1">
                        {reservation.itemDetail.itemName}
                      </span>
                    </div>
                  </Link>

                  <div className="mt-3 px-4 py-3.5 bg-gray-100 rounded-sm flex justify-between items-center">
                    <div className="flex-1 flex flex-col gap-0.5">
                      <span className="text-detail-1 text-gray-600">
                        {reservation.status === "reserved"
                          ? "대여시각"
                          : "반납시각"}
                      </span>
                      <span className="text-body-6">
                        {reservation.status === "reserved"
                          ? reservation.pickupTime
                          : reservation.returnTime}
                      </span>
                    </div>
                    {reservation.status === "reserved" ? (
                      <BottomSheet onClose={() => setImages([])}>
                        <BottomSheetTrigger asChild>
                          <Button size="small" variant="secondary">
                            픽업하기
                          </Button>
                        </BottomSheetTrigger>
                        <BottomSheetContent>
                          <BottomSheetHeader>
                            <BottomSheetTitle>
                              픽업 사진 업로드
                            </BottomSheetTitle>
                            <BottomSheetDescription className="sr-only">
                              픽업 사진을 업로드하면 대여가 시작됩니다.
                            </BottomSheetDescription>
                          </BottomSheetHeader>
                          <div className="pt-3.5 pb-8 px-4.5">
                            <span className="text-heading-5">사진등록</span>
                            <p className="text-gray-600 text-body-5 mt-1 mb-2">
                              픽업 시 사진을 업로드해 주세요.
                            </p>
                            <MultipleImageUploader
                              images={images}
                              onImageChange={setImages}
                              maxImages={4}
                            />
                          </div>
                          <FixedBottomActions>
                            <Button
                              size="large"
                              variant="primary"
                              disabled={images.length === 0}
                            >
                              픽업하기
                            </Button>
                          </FixedBottomActions>
                        </BottomSheetContent>
                      </BottomSheet>
                    ) : reservation.status === "rented" ? (
                      <BottomSheet onClose={() => setImages([])}>
                        <BottomSheetTrigger asChild>
                          <Button size="small" variant="secondary">
                            반납하기
                          </Button>
                        </BottomSheetTrigger>
                        <BottomSheetContent>
                          <BottomSheetHeader>
                            <BottomSheetTitle>
                              반납 사진 업로드
                            </BottomSheetTitle>
                            <BottomSheetDescription className="sr-only">
                              반납 사진을 업로드하면 대여가 종료됩니다.
                            </BottomSheetDescription>
                          </BottomSheetHeader>
                          <div className="pt-3.5 pb-8 px-4.5">
                            <span className="text-heading-5">사진등록</span>
                            <p className="text-gray-600 text-body-5 mt-1 mb-2">
                              반납 시 사진을 업로드해 주세요.
                            </p>
                            <MultipleImageUploader
                              images={images}
                              onImageChange={setImages}
                              maxImages={4}
                            />
                          </div>
                          <FixedBottomActions>
                            <Button
                              size="large"
                              variant="primary"
                              disabled={images.length === 0}
                            >
                              반납하기
                            </Button>
                          </FixedBottomActions>
                        </BottomSheetContent>
                      </BottomSheet>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
