import { clientEnv } from "@/lib/client-env";
import { components } from "@/types/api-schema";

export class ImageRepository {
  static async updateImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${clientEnv.API_URL}/images`, {
      method: "POST",
      body: formData,
      credentials: "include",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const data =
      (await response.json()) as components["schemas"]["ImageSchema"];

    return data;
  }
}
