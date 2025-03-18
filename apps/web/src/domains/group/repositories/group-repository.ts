import { fetchClient } from "@/lib/fetch-client";
import { components } from "@/types/api-schema";

export class GroupRepository {
  static async fetchGroups() {
    const { data } = await fetchClient.GET("/groups");
    if (!data) {
      throw new Error("Failed to fetch groups");
    }
    return data.data;
  }

  static async createGroup(
    body: components["schemas"]["GroupCreateJsonSchema"]
  ) {
    const { data } = await fetchClient.POST("/groups", {
      body,
    });
    if (!data) {
      throw new Error("Failed to create group");
    }
    return data.data;
  }

  static async fetchGroupById(id: string) {
    const { data } = await fetchClient.GET("/groups/{id}", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch group");
    }
    return data.data;
  }

  static async updateGroup(
    id: string,
    body: components["schemas"]["GroupCreateJsonSchema"]
  ) {
    const { data } = await fetchClient.PATCH("/groups/{id}", {
      params: {
        path: {
          id,
        },
      },
      body,
    });
    if (!data) {
      throw new Error("Failed to update group");
    }
    return data.data;
  }

  static async removeGroup(id: string) {
    await fetchClient.DELETE("/groups/{id}", {
      params: {
        path: {
          id,
        },
      },
    });
  }

  static async fetchGroupInvites(id: string) {
    const { data } = await fetchClient.GET("/groups/{id}/invites", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch group invites");
    }
    return data.data;
  }

  static async createGroupInvite(id: string) {
    const { data } = await fetchClient.POST("/groups/{id}/invites", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to create group invite");
    }
    return data.data;
  }

  static async fetchGroupItems(id: string) {
    const { data } = await fetchClient.GET("/groups/{id}/items", {
      params: {
        path: {
          id,
        },
      },
    });

    if (!data) {
      throw new Error("Failed to fetch group items");
    }
    return data.data;
  }

  static async createGroupItem(
    id: string,
    body: components["schemas"]["GroupItemCreateJsonSchema"]
  ) {
    const { data } = await fetchClient.POST("/groups/{id}/items", {
      params: {
        path: {
          id,
        },
      },
      body,
    });
    if (!data) {
      throw new Error("Failed to create group item");
    }

    return data.data;
  }

  static async fetchGroupMembers(id: string) {
    const { data } = await fetchClient.GET("/groups/{id}/members", {
      params: {
        path: {
          id,
        },
      },
    });
    if (!data) {
      throw new Error("Failed to fetch group members");
    }
    return data.data;
  }

  static async removeGroupMembers(
    id: string,
    body: components["schemas"]["GroupMembersDeleteJsonSchema"]
  ) {
    await fetchClient.DELETE("/groups/{id}/members", {
      params: {
        path: {
          id,
        },
      },
      body,
    });
  }

  static async leaveGroup(id: string) {
    await fetchClient.DELETE("/groups/{id}/members/me", {
      params: {
        path: {
          id,
        },
      },
    });
  }
}
