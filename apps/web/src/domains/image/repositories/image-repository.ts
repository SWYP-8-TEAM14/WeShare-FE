import { clientEnv } from "@/lib/client-env";
import { components } from "@/types/api-schema";

export class ImageRepository {
  static async uploadImage(files: File[]) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch(`${clientEnv.API_URL}/images`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const result = await response.json();
    const data = result.data as components["schemas"]["ImageSchema"];

    return data;
  }
}
