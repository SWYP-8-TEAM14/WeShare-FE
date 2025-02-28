import { ReservationRepository } from "@/domains/reservation/repositories/reservation-repository";

export class ReservationService {
  static async fetchReservationTimes({ itemId }: { itemId: string }) {
    const response = await ReservationRepository.fetchReservationTimes({
      itemId,
    });

    return response;
  }
}
