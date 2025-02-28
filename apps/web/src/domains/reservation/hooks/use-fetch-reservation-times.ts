import { ReservationService } from "@/domains/reservation/services/reservation-service";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

interface UseFetchReservationTimesOptions {
  itemId: string;
}

export const fetchReservationTimesOptions = ({
  itemId,
}: UseFetchReservationTimesOptions) =>
  queryOptions({
    queryKey: ["reservationTimes", { itemId }],
    queryFn: async () => {
      const response = await ReservationService.fetchReservationTimes({
        itemId,
      });
      return response;
    },
  });

export const useFetchReservationTimes = ({
  itemId,
}: UseFetchReservationTimesOptions) => {
  return useSuspenseQuery(fetchReservationTimesOptions({ itemId }));
};
