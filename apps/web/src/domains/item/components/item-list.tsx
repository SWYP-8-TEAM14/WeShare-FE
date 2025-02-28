"use client";
import { LikeActiveIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import Image from "next/image";
import Link from "next/link";

type ItemListProps = {
  items: {
    id: number;
    image: string;
    group: {
      name: string;
    };
    itemStatus: string;
    itemName: string;
    user: {
      isLiked: boolean;
    };
  }[];
};

export default function ItemList({ items }: ItemListProps) {
  return (
    <div className="">
      {items.map((item, index) => (
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
    </div>
  );
}
