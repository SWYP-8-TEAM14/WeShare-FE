import { z } from "zod";

export const reservationFormSchema = z.object({
  itemId: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export type ReservationFormSchema = z.infer<typeof reservationFormSchema>;
