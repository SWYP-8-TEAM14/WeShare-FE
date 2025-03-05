import { GroupService } from "@/domains/group/services/group-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemIds }: { itemIds: number[] }) => {
      return GroupService.deleteItemsFromGroup({ itemIds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
  });
};
