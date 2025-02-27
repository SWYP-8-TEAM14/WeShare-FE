import {
  GroupItemsSchema,
  groupItemsSchema,
} from "@/domains/group/types/group-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";

export const useGroupItemsForm = (options: UseFormProps<GroupItemsSchema>) => {
  return useForm<GroupItemsSchema>({
    resolver: zodResolver(groupItemsSchema),
    ...options,
  });
};
