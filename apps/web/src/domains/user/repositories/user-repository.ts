import httpClient from "@/lib/ky";
import { z } from "zod";

const fetchProfileSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  profile_image: z.string().nullable(),
  created_at: z.string(),
});

export class UserRepository {
  static async fetchProfile() {
    const response = await httpClient.get("users/me/").json();
    const data = fetchProfileSchema.parse(response);
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      profileImage: data.profile_image,
      createdAt: data.created_at,
    };
  }
}
