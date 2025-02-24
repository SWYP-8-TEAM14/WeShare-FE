import ItemList from "@/items/components/item-list";

interface GroupItemsPreviewProps {
  groupItems: {
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

export default function GroupItemsPreview({
  groupItems,
}: GroupItemsPreviewProps) {
  return (
    <div className="mt-4">
      <ItemList items={groupItems} />
    </div>
  );
}
