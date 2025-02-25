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
