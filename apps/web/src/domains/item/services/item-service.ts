import { ItemRepository } from "@/domains/item/repositories/item-repository";

export class ItemService {
  static async createItem(
    groupId: string,
    data: {
      images: File[];
      name: string;
      description: string;
      quantity: number;
      pickupLocation: string;
      returnLocation: string;
      caution: string;
    }
  ) {
    const response = await ItemRepository.createItem(groupId, data);
    return response;
  }

  static async fetchItems({
    search,
    group,
    sort,
  }: {
    search: string;
    group: string;
    sort: "recent" | "old";
  }) {
    const response = await ItemRepository.fetchItems({
      search,
      group,
      sort,
    });
    return response;
  }

  static async fetchItem(itemId: string) {
    const response = await ItemRepository.fetchItem({ itemId });
    return response;
  }
}
