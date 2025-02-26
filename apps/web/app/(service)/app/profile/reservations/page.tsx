import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { reservationHistory } from "@/domains/reservation/mocks";
import { DownChevronIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function UserReservationsPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>예약/대여 현황</TopNavigationTitle>
      </TopNavigation>

      <Tabs defaultValue="all">
        <div className="bg-white">
          <TabsList>
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="reserved">예약/픽업</TabsTrigger>
            <TabsTrigger value="rented">대여 중</TabsTrigger>
            <TabsTrigger value="returned">반납</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <div className="py-2.5 px-4.5 flex gap-2 items-center justify-end bg-white">
            <FilterChip>그룹</FilterChip>
            <FilterChip>정렬</FilterChip>
          </div>
          <div className="py-6 px-4.5 flex flex-col gap-5">
            {reservationHistory.map((reservation) => (
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
                      대여시각
                    </span>
                    <span className="text-body-6">
                      {reservation.pickupTime}
                    </span>
                  </div>
                  <Button size="small" variant="secondary">
                    픽업하기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reserved">예약/픽업</TabsContent>
        <TabsContent value="rented">대여 중</TabsContent>
        <TabsContent value="returned">반납</TabsContent>
      </Tabs>
    </Page>
  );
}

function FilterChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-0.5 bg-white rounded-full px-3 py-2 text-body-6 text-gray-700 border border-gray-200">
      {children}
      <DownChevronIcon className="size-4 text-gray-700" />
    </div>
  );
}
