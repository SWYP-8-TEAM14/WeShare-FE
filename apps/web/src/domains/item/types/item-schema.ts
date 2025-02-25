import { z } from "zod";

export const itemFormSchema = z.object({
  images: z.preprocess(
    (value) => (Array.isArray(value) ? value : [value]),
    z.array(z.instanceof(File)).max(4)
  ),
  name: z.string(),
  quantity: z.number().int().min(1).max(999),
  description: z.string(),
});

export type ItemFormSchema = z.infer<typeof itemFormSchema>;
