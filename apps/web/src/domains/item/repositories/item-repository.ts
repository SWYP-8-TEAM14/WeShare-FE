import { fetchClient } from "@/lib/fetch-client";
import { components } from "@/types/api-schema";

export class ItemRepository {
  static async fetchItems() {
    const { data } = await fetchClient.GET("/items");
    if (!data) {
      throw new Error("Failed to fetch items");
    }
    return data.data;
  }

  static async fetchItem(id: string) {
    const { data } = await fetchClient.GET("/items/{id}", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch item");
    }
    return data.data;
  }

  static async updateItem(
    id: string,
    body: components["schemas"]["ItemUpdateJsonSchema"]
  ) {
    const { data } = await fetchClient.PATCH("/items/{id}", {
      params: {
        path: {
          id,
        },
      },
      body,
    });
    if (!data) {
      throw new Error("Failed to update item");
    }
    return data.data;
  }

  static async fetchItemAvailableTimes(id: string) {
    const { data } = await fetchClient.GET("/items/{id}/available-times", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch item available times");
    }
    return data.data;
  }

  static async fetchItemReservations(id: string) {
    const { data } = await fetchClient.GET("/items/{id}/reservations", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch item reservations");
    }
    return data.data;
  }
}
