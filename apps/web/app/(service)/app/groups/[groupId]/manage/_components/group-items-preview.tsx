import ItemList from "@/domains/item/components/item-list";

interface GroupItemsPreviewProps {
  groupItems: {
    id: number;
    image: string;
    group: {
      name: string;
    };
    itemStatus: number;
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
