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
    reservation_user_id: z.number().nullable(),
    reservation_user_name: z.string().nullable(),
  })
);

const fetchItemSchema = z.object({
  user_id: z.number(),
  username: z.string(),
  group_id: z.number(),
  group_name: z.string(),
  item_id: z.number(),
  item_name: z.string(),
  pickup_place: z.string(),
  return_place: z.string(),
  item_description: z.string(),
  image_urls: z.array(z.string()),
  status: z.number(),
  quantity: z.number(),
  caution: z.string(),
  created_at: z.string(),
});

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
    formData.append("user_id", profile.id.toString());
    formData.append("group_id", groupId);
    formData.append("item_name", data.name);
    formData.append("item_description", data.description);
    formData.append("quantity", data.quantity.toString());
    formData.append("pickup_place", data.pickupLocation);
    formData.append("return_place", data.returnLocation);
    formData.append("caution", data.caution);
    data.images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("status", "0");

    const response = await httpClient.post<void>(`shared/items/add`, {
      body: formData,
    });

    return response.json();
  }

  static async fetchItems({
    search,
    group,
    sort,
    isAll,
  }: {
    search: string;
    group: string;
    sort: "recent" | "old";
    isAll: boolean;
  }) {
    const json = await httpClient
      .post<ResourceResponse<string>>("shared/items/", {
        json: {
          user_id: profile.id,
          group_id: group ? parseInt(group) : 0,
          sort: fetchItemsSortMap[sort],
          is_all: isAll ? true : false,
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

  static async fetchItem({ itemId }: { itemId: string }) {
    const response = await httpClient.post<ResourceResponse<string>>(
      `shared/items/detail/`,
      {
        json: {
          item_id: parseInt(itemId),
          user_id: profile.id,
        },
      }
    );

    const json = await response.json();

    const data = JSON.parse(json.data);
    const parsedData = fetchItemSchema.parse(data);
    return {
      userId: parsedData.user_id,
      username: parsedData.username,
      groupId: parsedData.group_id,
      groupName: parsedData.group_name,
      itemId: parsedData.item_id,
      itemName: parsedData.item_name,
      pickupPlace: parsedData.pickup_place,
      returnPlace: parsedData.return_place,
      itemDescription: parsedData.item_description,
      imageUrls: parsedData.image_urls,
      status: parsedData.status,
      quantity: parsedData.quantity,
      caution: parsedData.caution,
      createdAt: parsedData.created_at,
    };
  }
}
