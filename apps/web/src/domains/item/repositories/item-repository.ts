import httpClient from "@/lib/ky";

export class ItemRepository {
  static async createItem(
    groupId: string,
    data: {
      images: File[];
      name: string;
      description: string;
      quantity: number;
    }
  ) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    data.images.forEach((image) => {
      formData.append("images", image);
    });

    const response = await httpClient.post(`groups/${groupId}/items`, {
      json: formData,
    });

    return response.json();
  }
}
