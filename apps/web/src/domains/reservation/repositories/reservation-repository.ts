import {
  availableReservationTimes,
  reservationData,
} from "@/domains/reservation/mocks";

export class ReservationRepository {
  static async fetchReservationTimes({ itemId }: { itemId: string }) {
    return availableReservationTimes;
  }

  static async reserveItem({
    itemId,
    startTime,
    endTime,
  }: {
    itemId: string;
    startTime: string;
    endTime: string;
  }) {
    return reservationData;
  }
}
