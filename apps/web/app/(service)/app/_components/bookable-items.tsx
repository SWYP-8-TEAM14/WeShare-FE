import ItemList from "@/items/components/item-list";
import { bookableItems } from "@/items/data";

interface BookableItemsProps {
  items: {
    id: number;
    image: string;
    groupName: string;
    itemStatus: string;
    itemName: string;
    user: {
      isLiked: boolean;
    };
  }[];
}

export default function BookableItems({ items }: BookableItemsProps) {
  return (
    <div className="rounded-t-lg bg-white pt-7.5 shadow-[0_-3px_12px_0px_rgba(0,0,0,0.05)] flex-1 flex flex-col">
      <h2 className="text-heading-4 mx-4.5 text-gray-800">예약 가능한 물품</h2>
      <div className="mt-2.5">
        <ItemList items={items} />
      </div>

      {bookableItems.length === 0 && (
        <div className="flex flex-col items-center justify-center grow-1 mt-5 h-full">
          <p className="text-body-2 text-gray-500">
            현재 예약 가능한 물품이 없어요.
          </p>
        </div>
      )}
    </div>
  );
}
