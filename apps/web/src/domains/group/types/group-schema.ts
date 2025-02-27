import { z } from "zod";

export const groupFormSchema = z.object({
  image: z.preprocess(
    (value) => (Array.isArray(value) ? value : [value]),
    z.array(z.instanceof(File)).max(1)
  ),
  name: z.string(),
  description: z.string(),
});

export type GroupFormSchema = z.infer<typeof groupFormSchema>;

export const groupMembersSchema = z.object({
  userIds: z.array(z.number()),
});

export type GroupMembersSchema = z.infer<typeof groupMembersSchema>;
