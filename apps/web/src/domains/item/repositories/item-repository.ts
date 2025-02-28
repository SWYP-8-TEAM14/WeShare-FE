import { groupItems } from "@/domains/item/mocks";
import httpClient from "@/lib/ky";

export class ItemRepository {
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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    data.images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("quantity", data.quantity.toString());
    formData.append("pickupLocation", data.pickupLocation);
    formData.append("returnLocation", data.returnLocation);
    formData.append("caution", data.caution);

    const response = await httpClient.post(`groups/${groupId}/items`, {
      json: formData,
    });

    return response.json();
  }

  static async fetchItems({
    search,
    group,
    sort,
    page,
    limit,
  }: {
    search: string;
    group: string;
    sort: "recent";
    page: number;
    limit: number;
  }) {
    return groupItems
      .filter((item) => {
        if (group) {
          return item.group.id.toString() === group;
        }
        return true;
      })
      .filter((item) => {
        if (search) {
          return item.itemName.includes(search);
        }
        return true;
      })
      .slice((page - 1) * limit, page * limit);
  }
}
