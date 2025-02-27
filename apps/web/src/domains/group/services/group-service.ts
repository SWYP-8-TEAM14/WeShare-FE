import { GroupRepository } from "@/domains/group/repositories/group-repository";

export class GroupService {
  static async createGroup(data: {
    image: string;
    name: string;
    description: string;
  }) {
    const response = await GroupRepository.createGroup(data);
    return response;
  }

  static async fetchGroups({
    filter,
    sort,
    page,
    limit,
  }: {
    filter: "all" | "own";
    sort: "default" | "many-members";
    page: number;
    limit: number;
  }) {
    const response = await GroupRepository.fetchGroups({
      filter,
      sort,
      page,
      limit,
    });
    return response;
  }
}
