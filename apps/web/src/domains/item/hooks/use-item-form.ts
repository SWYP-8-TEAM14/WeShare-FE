import {
  itemFormSchema,
  ItemFormSchema,
} from "@/domains/item/types/item-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";

export const useItemForm = (options: UseFormProps<ItemFormSchema>) => {
  return useForm<ItemFormSchema>({
    resolver: zodResolver(itemFormSchema),
    ...options,
  });
};
