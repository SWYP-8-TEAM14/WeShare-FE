import { fetchClient } from "@/lib/fetch-client";
import { components } from "@/types/api-schema";

export class ReservationRepository {
  static async fetchReservations() {
    const { data } = await fetchClient.GET("/reservations");
    if (!data) {
      throw new Error("Failed to fetch reservations");
    }
    return data.data;
  }

  static async createReservation(
    body: components["schemas"]["ReservationCreateJsonSchema"]
  ) {
    const { data } = await fetchClient.POST("/reservations", body);
    if (!data) {
      throw new Error("Failed to create reservation");
    }
    return data.data;
  }

  static async fetchReservationById(id: string) {
    const { data } = await fetchClient.GET("/reservations/{id}", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch reservation by id");
    }
    return data.data;
  }

  static async cancelReservation(id: string) {
    const { data } = await fetchClient.POST("/reservations/{id}/cancel", {
      params: {
        path: {
          id,
        },
      },
    });

    if (!data) {
      throw new Error("Failed to cancel reservation");
    }
    return data.data;
  }
}
