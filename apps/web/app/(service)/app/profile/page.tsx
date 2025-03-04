import BottomNavigation from "@/components/bottom-navigation";
import Page from "@/components/page";
import { profile } from "@/domains/user/mocks";
import { RightChevronIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { TopNavigation, TopNavigationTitle } from "@repo/ui/top-navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationTitle>마이페이지</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white px-4.5 py-6 flex items-center justify-between gap-3">
        <Image
          unoptimized
          src={profile.profileImage}
          width={60}
          height={60}
          className="rounded-full"
          alt="프로필 이미지"
        />
        <div className="flex-1">
          <p className="text-heading-3">{profile.nickname}</p>
          <p className="text-body-4 text-gray-600 mt-1.5">{profile.fullName}</p>
        </div>
        <Button size="small" variant="tertiary" asChild>
          <Link href="/app/profile/info">편집</Link>
        </Button>
      </div>
      <div className="mt-2 bg-white divide-gray-200 divide-y">
        <Link
          href="/app/profile/reservations"
          className="flex items-center justify-between p-5 h-15.5"
        >
          <p className="text-heading-4 text-gray-800">
            대여 내역
            <span className="text-primary-500 ml-1.5">
              {profile.totalReservations}개
            </span>
          </p>
          <RightChevronIcon className="size-4 text-gray-700" />
        </Link>
        <Link
          href="/app/profile/likes"
          className="flex items-center justify-between p-5 h-15.5"
        >
          <p className="text-heading-4 text-gray-800">
            찜한 물품
            <span className="text-primary-500 ml-1.5">
              {profile.totalLikedItems}개
            </span>
          </p>
          <RightChevronIcon className="size-4 text-gray-700" />
        </Link>
      </div>

      <FixedBottom>
        <BottomNavigation currentTab="profile" />
      </FixedBottom>
    </Page>
  );
}
