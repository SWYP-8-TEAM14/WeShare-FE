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
}
