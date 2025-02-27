import {
  groupFormSchema,
  GroupFormSchema,
} from "@/domains/group/types/group-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";

export const useUpdateGroupForm = (
  defaultValues: UseFormProps<GroupFormSchema>
) => {
  return useForm<GroupFormSchema>({
    resolver: zodResolver(groupFormSchema),
    ...defaultValues,
  });
};
