import { profile } from "@/domains/user/mocks";
import httpClient from "@/lib/ky";
import { ResourceResponse } from "@/types/api";
import { z } from "zod";

const fetchItemsSortMap = {
  recent: 1,
  old: 2,
};

const fetchItemsSchema = z.array(
  z.object({
    group_id: z.number(),
    group_name: z.string(),
    item_id: z.number(),
    item_name: z.string(),
    image_urls: z.array(z.string()),
    quantity: z.number(),
    created_at: z.string(),
    is_wishlist: z.number(),
    status: z.number(),
    reservation_user_id: z.number(),
    reservation_user_name: z.string(),
  })
);

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
  }: {
    search: string;
    group: string;
    sort: "recent" | "old";
  }) {
    const json = await httpClient
      .post<ResourceResponse<string>>("shared/items/", {
        json: {
          user_id: profile.id,
          group_id: group ? parseInt(group) : 0,
          sort: fetchItemsSortMap[sort],
        },
      })
      .json();

    const data = JSON.parse(json.data);
    const parsedData = fetchItemsSchema.parse(data);
    return parsedData.map((item) => ({
      groupId: item.group_id,
      groupName: item.group_name,
      itemId: item.item_id,
      itemName: item.item_name,
      imageUrls: item.image_urls,
      quantity: item.quantity,
      createdAt: item.created_at,
      isWishlist: item.is_wishlist,
      status: item.status,
      reservationUserId: item.reservation_user_id,
      reservationUserName: item.reservation_user_name,
    }));
  }
}
