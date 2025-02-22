import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { itemDetail } from "@/items/data";
import { RightChevronIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { IconButton } from "@repo/ui/icon-button";
import { ImageCarousel } from "@repo/ui/image-carousel";
import {
  ListHeader,
  ListHeaderAction,
  ListHeaderTitle,
} from "@repo/ui/list-header";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function ItemDetailPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>뽀로로 코딩 컴퓨터</TopNavigationTitle>
      </TopNavigation>
      <ImageCarousel
        slides={itemDetail.images.map((image) => ({
          src: image,
          alt: itemDetail.itemName,
        }))}
      />
      <div className="bg-white p-4.5 flex items-center justify-between">
        <div>
          <p className="text-body-6 text-gray-600">{itemDetail.group.name}</p>
          <p className="text-heading-2 mt-1.5">{itemDetail.itemName}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 px-5 rounded-sm h-17.5">
          <span className="text-detail-2 text-gray-700">수량</span>
          <span className="text-body-1 mt-1.5">{itemDetail.quantity}개</span>
        </div>
      </div>
      <hr className="h-px bg-gray-200 mx-4.5 border-none" />
      <div className="p-4.5 bg-white">
        <div>
          <h3 className="text-heading-5 text-gray-800">상세내용</h3>
          <p className="text-body-2 text-gray-700 mt-2">{itemDetail.details}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-heading-5 text-gray-800">대여시 주의사항</h3>
          <p className="text-body-2 text-gray-700 mt-2">{itemDetail.caution}</p>
        </div>
      </div>
      <div className="px-4.5 pb-7 bg-white">
        <div className="p-4 rounded-sm bg-gray-100 grid grid-cols-2 gap-2">
          <div>
            <span className="text-body-6 text-gray-600">픽업 장소</span>
            <p className="text-heading-2 mt-1.5">{itemDetail.pickupLocation}</p>
          </div>
          <div>
            <span className="text-body-6 text-gray-600">반납 장소</span>
            <p className="text-heading-2 mt-1.5">{itemDetail.returnLocation}</p>
          </div>
        </div>
      </div>
      <section className="mt-2 pt-7 bg-white">
        <ListHeader>
          <ListHeaderTitle>이전 대여 멤버</ListHeaderTitle>
          <ListHeaderAction>
            <IconButton>
              <RightChevronIcon />
            </IconButton>
          </ListHeaderAction>
        </ListHeader>

        <div className="mt-3">
          {itemDetail.previousRenters.map((renter) => (
            <div
              key={renter.id}
              className="flex items-center gap-2 h-15 py-2 px-4.5"
            >
              <Image
                unoptimized
                width={36}
                height={36}
                src={renter.profileImage}
                alt={renter.name}
                className="rounded-full"
              />
              <div className="flex-1 flex items-center gap-1.5">
                <p className="text-body-1">{renter.name}</p>
                <p className="text-detail-2 text-gray-700">
                  {renter.period.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FixedBottom>
        <FixedBottomActions>
          <Button size="large" asChild>
            <Link href={`/app/reserve/${itemDetail.id}`}>예약하기</Link>
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
