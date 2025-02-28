import { ReservationRepository } from "@/domains/reservation/repositories/reservation-repository";

export class ReservationService {
  static async fetchReservationTimes({ itemId }: { itemId: string }) {
    const response = await ReservationRepository.fetchReservationTimes({
      itemId,
    });

    return response;
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
    const response = await ReservationRepository.reserveItem({
      itemId,
      startTime,
      endTime,
    });

    return response;
  }
}
