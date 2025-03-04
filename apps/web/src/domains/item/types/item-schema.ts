import { z } from "zod";

export const itemFormSchema = z.object({
  images: z.preprocess(
    (value) => (Array.isArray(value) ? value : [value]),
    z
      .array(z.instanceof(File))
      .min(1, "한개 이상의 이미지를 업로드해주세요")
      .max(4, "최대 4개의 이미지를 업로드해주세요")
  ),
  name: z.string().min(1).max(100),
  quantity: z.number().int().min(1).max(999),
  description: z.string().max(100),
  pickupLocation: z.string().max(100),
  returnLocation: z.string().max(100),
  caution: z.string().max(100),
});

export type ItemFormSchema = z.infer<typeof itemFormSchema>;
