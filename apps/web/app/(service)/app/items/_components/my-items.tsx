"use client";
import { useFetchItems } from "@/domains/item/hooks/use-fetch-items";
import { LikeActiveIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type MyItemsProps = {
  search: string;
  groupFilter: string;
  sort: "recent";
};

export default function MyItems({ search, groupFilter, sort }: MyItemsProps) {
  const { ref, inView } = useInView();
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchItems({ search, group: groupFilter, sort });

  const allItems = data?.pages.flatMap((page) => page);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="">
      {allItems.map((item, index) => (
        <Link
          key={index}
          href={`/app/items/${item.id}`}
          className="flex gap-3 justify-between px-4.5 py-2.5"
        >
          <Image
            unoptimized
            src={item.image}
            width={74}
            height={74}
            alt="item"
            className="rounded-sm"
          />
          <div className="flex-1 mt-3">
            <div className="flex items-center">
              <span className="text-gray-600 text-body-6 line-clamp-1">
                {item.group.name}
              </span>
              <span className="w-px h-2 bg-gray-200 mx-1.5" />
              <span className="text-primary text-body-6 font-semibold">
                {item.itemStatus}
              </span>
            </div>
            <p className="text-body-1 mt-1.5 line-clamp-2">{item.itemName}</p>
          </div>
          <div className="flex items-center">
            {item.user.isLiked ? (
              <IconButton className="text-primary-400">
                <LikeActiveIcon />
                <span className="sr-only">좋아요</span>
              </IconButton>
            ) : (
              <IconButton className="text-gray-300">
                <LikeActiveIcon />
                <span className="sr-only">좋아요 취소</span>
              </IconButton>
            )}
          </div>
        </Link>
      ))}
      <div ref={ref} className="flex justify-center w-full">
        {isFetchingNextPage && <div>로딩중...</div>}
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>더보기</button>
        )}
      </div>
    </div>
  );
}
