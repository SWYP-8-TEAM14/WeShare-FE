import { GroupRepository } from "@/domains/group/repositories/group-repository";

export class GroupService {
  static async createGroup(data: {
    image: File;
    name: string;
    description: string;
  }) {
    const response = await GroupRepository.createGroup(data);
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
    const response = await GroupRepository.updateGroup({ groupId, data });
    return response;
  }

  static async deleteMembersFromGroup({
    groupId,
    userIds,
  }: {
    groupId: number;
    userIds: number[];
  }) {
    const response = await GroupRepository.deleteMembersFromGroup({
      groupId,
      userIds,
    });
    return response;
  }

  static async deleteItemsFromGroup({ itemIds }: { itemIds: number[] }) {
    const response = await GroupRepository.deleteItemsFromGroup({
      itemIds,
    });
    return response;
  }

  static async fetchGroups({
    filter,
    sort,
  }: {
    filter: "all" | "own";
    sort: "default" | "many-members";
  }) {
    const response = await GroupRepository.fetchGroups({
      filter,
      sort,
    });
    return response;
  }

  static async fetchGroup({ groupId }: { groupId: number }) {
    const response = await GroupRepository.fetchGroup(groupId);
    return response;
  }
}
