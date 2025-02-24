import Image from "next/image";
import Link from "next/link";

interface MainBannersProps {
  pickupCount: number;
  returnCount: number;
}

export default function MainBanners({
  pickupCount,
  returnCount,
}: MainBannersProps) {
  return (
    <div className="pt-5 px-4.5 pb-11 grid grid-cols-2 grid-rows-2 gap-3">
      <h2 className="sr-only">예약하기, 픽업하기, 반납하기 메인 배너</h2>
      <Link
        href="/app/items"
        className="shadow-main-banner bg-white row-span-2 pt-4 pl-4 pr-2 pb-2 rounded-md flex flex-col"
      >
        <p className="text-heading-3">예약하기</p>
        <p className="text-body-6 text-gray-600 mt-1">편리하게 예약하기</p>
        <div className="flex-1 flex justify-end items-end">
          <Image
            unoptimized
            src="/images/banner-1.png"
            width={83}
            height={83}
            alt="calendar"
            className=""
          />
        </div>
      </Link>
      <Link
        href="/app/profile/reservations?status=upcoming"
        className="shadow-main-banner bg-white flex rounded-md"
      >
        <div className="mt-4 ml-4">
          <p className="text-heading-3">픽업하기</p>
          <p className="text-heading-5 text-gray-800 mt-1.5">
            <span className="text-heading-3 text-primary-500">
              {pickupCount}
            </span>
            건
          </p>
        </div>

        <Image
          unoptimized
          src="/images/banner-2.png"
          width={83}
          height={83}
          alt="pickup"
          className="ml-auto"
        />
      </Link>
      <Link
        href="/app/profile/reservations?status=return"
        className="shadow-main-banner bg-white flex rounded-md"
      >
        <div className="mt-4 ml-4">
          <p className="text-heading-3">반납하기</p>
          <p className="text-heading-5 text-gray-800 mt-1.5">
            <span className="text-heading-3 text-primary-500">
              {returnCount}
            </span>
            건
          </p>
        </div>
        <div className="ml-auto">
          <Image
            unoptimized
            src="/images/banner-3.png"
            width={83}
            height={83}
            alt="return"
          />
        </div>
      </Link>
    </div>
  );
}
