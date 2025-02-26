import ItemList from "@/domains/item/components/item-list";
import { RightChevronIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import {
  ListHeader,
  ListHeaderAction,
  ListHeaderTitle,
} from "@repo/ui/list-header";

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
    <section className="mt-2 pt-6.5 bg-white flex-1">
      <ListHeader>
        <ListHeaderTitle size="large">공용물품 리스트</ListHeaderTitle>
        <ListHeaderAction>
          <IconButton>
            <RightChevronIcon />
          </IconButton>
        </ListHeaderAction>
      </ListHeader>
      <div className="mt-4">
        <ItemList items={groupItems} />
      </div>
    </section>
  );
}
