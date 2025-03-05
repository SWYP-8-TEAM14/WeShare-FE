import { profile } from "@/domains/user/mocks";
import httpClient from "@/lib/ky";
import { z } from "zod";

const fetchGroupsSchema = z.array(
  z.object({
    group_id: z.number(),
    group_name: z.string(),
    group_image: z.string(),
    group_description: z.string(),
    member_count: z.number(),
  })
);

const fetchGroupSchema = z.object({
  group_name: z.string(),
  group_image: z.string(),
  group_description: z.string(),
});

export class GroupRepository {
  static async createGroup(data: {
    image: File;
    name: string;
    description: string;
  }) {
    const formData = new FormData();
    formData.append("group_image", data.image);
    formData.append("group_name", data.name);
    formData.append("group_description", data.description);

    const response = await httpClient
      .post("groups/groups/create", {
        body: formData,
      })
      .json();
    return response;
  }

  static async updateGroup({
    groupId,
    data,
  }: {
    groupId: number;
    data: {
      image: File;
      name: string;
      description: string;
    };
  }) {
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("description", data.description);

    const response = await httpClient
      .patch(`groups/${groupId}`, {
        body: formData,
      })
      .json();
    return response;
  }

  static async deleteMembersFromGroup({
    groupId,
    userIds,
  }: {
    groupId: number;
    userIds: number[];
  }) {
    const response = await httpClient
      .delete(`groups/${groupId}/members`, {
        json: {
          userIds,
        },
      })
      .json();
    return response;
  }

  static async deleteItemsFromGroup({ itemIds }: { itemIds: number[] }) {
    const response = await httpClient
      .post(`shared/items/delete`, {
        json: {
          user_id: profile.id,
          item_id: itemIds,
        },
      })
      .json();
    return response;
  }

  static async fetchGroups({
    filter,
    sort,
  }: {
    filter: "all" | "own";
    sort: "default" | "many-members";
  }) {
    const response = await httpClient
      .get("groups/groups/", {
        searchParams: {
          created_by_me: filter === "own",
        },
      })
      .json();

    const parsedData = fetchGroupsSchema.parse(response);

    return parsedData.map((group) => ({
      id: group.group_id,
      name: group.group_name,
      image: group.group_image,
      description: group.group_description,
      memberCount: group.member_count,
    }));
  }

  static async fetchGroup(groupId: number) {
    const response = await httpClient.get(`groups/groups/${groupId}/`).json();

    const parsedData = fetchGroupSchema.parse(response);

    return {
      name: parsedData.group_name,
      image: parsedData.group_image,
      description: parsedData.group_description,
    };
  }
}
