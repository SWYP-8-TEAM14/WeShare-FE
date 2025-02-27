import { MockGroups } from "@/domains/group/mocks";
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
    return MockGroups.groups
      .filter((group) => {
        if (filter === "all") {
          return true;
        }
        return group.user.isOwner;
      })
      .sort((a, b) => {
        if (sort === "default") {
          return 0;
        }
        return b.members - a.members;
      })
      .slice((page - 1) * limit, page * limit);
    // const response = (await httpClient
    //   .get("groups", {
    //     searchParams: {
    //       filter,
    //       sort,
    //       page,
    //       limit,
    //     },
    //   })
    //   .json()) as {
    //   id: number;
    //   name: string;
    //   image: string;
    //   introduction: string;
    //   members: number;
    //   created_at: string;
    //   updated_at: string;
    //   user: {
    //     isOwner: boolean;
    //   };
    // }[];
    // return response;
  }
}
