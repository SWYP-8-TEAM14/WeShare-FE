import { fetchClient } from "@/lib/fetch-client";
import { components } from "@/types/api-schema";

export class UserRepository {
  static async fetchProfile() {
    const { data } = await fetchClient.GET("/users/me");
    if (!data) {
      throw new Error("Failed to fetch profile");
    }
    return data.data;
  }
  static async updateProfile(
    body: components["schemas"]["ProfileUpdateJsonSchema"]
  ) {
    const { data } = await fetchClient.PATCH("/users/me", body);
    if (!data) {
      throw new Error("Failed to update profile");
    }
    return data.data;
  }
}
