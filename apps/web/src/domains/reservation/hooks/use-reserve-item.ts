import { ReservationService } from "@/domains/reservation/services/reservation-service";
import { useMutation } from "@tanstack/react-query";

export const useReserveItem = () => {
  return useMutation({
    mutationFn: (data: {
      itemId: string;
      startTime: string;
      endTime: string;
    }) => ReservationService.reserveItem(data),
  });
};
