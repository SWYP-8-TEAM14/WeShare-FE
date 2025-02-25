import httpClient from "@/lib/ky";

export class GroupRepository {
  static async createGroup(data: {
    image: string;
    name: string;
    description: string;
  }) {
    const response = await httpClient
      .post("groups", {
        json: data,
      })
      .json();
    return response;
  }
}
