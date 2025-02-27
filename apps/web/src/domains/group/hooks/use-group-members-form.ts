import {
  GroupMembersSchema,
  groupMembersSchema,
} from "@/domains/group/types/group-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";

export const useGroupMembersForm = (
  options: UseFormProps<GroupMembersSchema>
) => {
  return useForm<GroupMembersSchema>({
    resolver: zodResolver(groupMembersSchema),
    ...options,
  });
};
