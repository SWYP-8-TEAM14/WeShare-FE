import { fetchClient } from "@/lib/fetch-client";

export class InviteRepository {
  static async fetchInvite(code: string) {
    const { data } = await fetchClient.GET("/invites/{code}", {
      params: {
        path: {
          code,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch invite");
    }
    return data.data;
  }

  static async acceptInvite(code: string) {
    const { data } = await fetchClient.POST("/invites/{code}/join", {
      params: {
        path: {
          code,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to accept invite");
    }
    return data.data;
  }
}
