import { GroupService } from "@/domains/group/services/group-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useBatchUpdateGroupMembers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      groupId,
      userIds,
      action,
    }: {
      groupId: number;
      userIds: number[];
      action: "delete";
    }) => {
      return GroupService.deleteMembersFromGroup({ groupId, userIds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
  });
};
