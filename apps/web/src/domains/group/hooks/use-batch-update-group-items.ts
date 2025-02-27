import { GroupService } from "@/domains/group/services/group-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useBatchUpdateGroupItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      groupId,
      itemIds,
      action,
    }: {
      groupId: number;
      itemIds: number[];
      action: "delete";
    }) => {
      return GroupService.deleteItemsFromGroup({ groupId, itemIds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
  });
};
