import {
  reservationFormSchema,
  ReservationFormSchema,
} from "@/domains/reservation/types/reservation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";

export const useReservationForm = (
  options?: UseFormProps<ReservationFormSchema>
) => {
  return useForm<ReservationFormSchema>({
    resolver: zodResolver(reservationFormSchema),
    ...options,
  });
};
