"use client";
import { useFetchItems } from "@/domains/item/hooks/use-fetch-items";
import { getItemStatusText } from "@/domains/item/utils/format";
import { LikeActiveIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import Image from "next/image";
import Link from "next/link";

type MyItemsProps = {
  search: string;
  groupFilter: string;
  sort: "recent" | "old";
};

export default function MyItems({ search, groupFilter, sort }: MyItemsProps) {
  const { data: items } = useFetchItems({ search, group: groupFilter, sort });

  return (
    <div className="">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/app/items/${item.itemId}`}
          className="flex gap-3 justify-between px-4.5 py-2.5"
        >
          <Image
            unoptimized
            src={
              item.imageUrls[0] || "https://placehold.co/100x100/white/white"
            }
            width={74}
            height={74}
            alt="item"
            className="rounded-sm"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/100x100/white/white";
            }}
          />
          <div className="flex-1 mt-3">
            <div className="flex items-center">
              <span className="text-gray-600 text-body-6 line-clamp-1">
                {item.groupName}
              </span>
              <span className="w-px h-2 bg-gray-200 mx-1.5" />
              <span className="text-primary text-body-6 font-semibold">
                {getItemStatusText(item.status)}
              </span>
            </div>
            <p className="text-body-1 mt-1.5 line-clamp-2">{item.itemName}</p>
          </div>
          <div className="flex items-center">
            {item.isWishlist === 1 ? (
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
    </div>
  );
}
