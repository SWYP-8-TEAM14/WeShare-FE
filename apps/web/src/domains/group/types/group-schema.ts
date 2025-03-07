import { z } from "zod";

export const groupFormSchema = z.object({
  image: z.instanceof(File, { message: "이미지 파일을 선택해주세요." }),
  name: z
    .string()
    .min(1, "그룹 이름을 입력해주세요.")
    .max(100, "그룹 이름은 100자 이하로 입력해주세요."),
  description: z.string(),
});

export type GroupFormSchema = z.infer<typeof groupFormSchema>;

export const groupMembersSchema = z.object({
  userIds: z.array(z.number()),
});

export type GroupMembersSchema = z.infer<typeof groupMembersSchema>;

export const groupItemsSchema = z.object({
  itemIds: z.array(z.number()),
});

export type GroupItemsSchema = z.infer<typeof groupItemsSchema>;
