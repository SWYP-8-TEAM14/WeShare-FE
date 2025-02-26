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
}
