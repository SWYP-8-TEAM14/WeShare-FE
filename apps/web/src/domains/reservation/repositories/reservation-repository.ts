import { availableReservationTimes } from "@/domains/reservation/mocks";

export class ReservationRepository {
  static async fetchReservationTimes({ itemId }: { itemId: string }) {
    return availableReservationTimes;
  }
}
