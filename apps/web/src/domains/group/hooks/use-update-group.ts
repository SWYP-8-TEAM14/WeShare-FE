import { GroupService } from "@/domains/group/services/group-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      groupId,
      data,
    }: {
      groupId: number;
      data: {
        image: File;
        name: string;
        description: string;
      };
    }) => GroupService.updateGroup({ groupId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
  });
};
