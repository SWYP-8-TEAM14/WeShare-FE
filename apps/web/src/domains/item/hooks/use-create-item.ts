import { ItemService } from "@/domains/item/services/item-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      groupId: string;
      images: File[];
      name: string;
      description: string;
      quantity: number;
      pickupLocation: string;
      returnLocation: string;
      caution: string;
    }) => ItemService.createItem(data.groupId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
  });
};
