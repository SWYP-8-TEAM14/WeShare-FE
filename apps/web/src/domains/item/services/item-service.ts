import { ItemRepository } from "@/domains/item/repositories/item-repository";

export class ItemService {
  static async createItem(
    groupId: string,
    data: {
      images: File[];
      name: string;
      description: string;
      quantity: number;
    }
  ) {
    const response = await ItemRepository.createItem(groupId, data);
    return response;
  }
}
