import { z } from "zod";

export const itemFormSchema = z.object({
  images: z.preprocess(
    (value) => (Array.isArray(value) ? value : [value]),
    z
      .array(z.instanceof(File))
      .min(1, "한개 이상의 이미지를 업로드해주세요")
      .max(4, "최대 4개의 이미지를 업로드해주세요")
  ),
  name: z.string().min(1, "물품 이름을 작성해주세요").max(100),
  quantity: z
    .number()
    .int()
    .min(1, "물품 수량을 1개 이상 입력해주세요")
    .max(999, "물품 수량은 최대 999개까지 입력 가능합니다"),
  description: z.string().max(100),
  pickupLocation: z
    .string()
    .min(1, "픽업 장소를 작성해주세요")
    .max(100, "픽업 장소는 100자 이내로 작성해주세요"),
  returnLocation: z
    .string()
    .min(1, "반납 장소를 작성해주세요")
    .max(100, "반납 장소는 100자 이내로 작성해주세요"),
  caution: z.string().max(100, "대여시 주의사항은 100자 이내로 작성해주세요"),
});

export type ItemFormSchema = z.infer<typeof itemFormSchema>;
