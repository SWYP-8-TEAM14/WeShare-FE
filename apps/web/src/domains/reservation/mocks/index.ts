import { ReservationTimeSlot } from "@/domains/reservation/types/reservation-types";
import dayjs from "dayjs";

export const reservationData = {
  itemDetail: {
    images: ["https://placehold.co/200"],
    itemName: "아이템 이름",
    group: { name: "그룹 이름" },
    quantity: 1,
    pickupLocation: "픽업 장소",
    returnLocation: "반납 장소",
  },
  reservationTime: {
    pickupTime: "2025-02-06T10:00:00",
    returnTime: "2025-02-06T12:00:00",
    duration: 2,
  },
};
export const availableReservationTimes: ReservationTimeSlot[] = [
  "2025-02-01T00:00:00Z",
  "2025-02-02T00:00:00Z",
  "2025-02-03T00:00:00Z",
  "2025-02-04T00:00:00Z",
  "2025-02-05T00:00:00Z",
]
  .map((date, index) => {
    return Array.from({ length: 24 }, (_, i) => {
      const slotStartDateTime = new Date(
        new Date(date).setHours(9 + i / 2, i % 2 === 0 ? 0 : 30)
      );

      const slotEndDateTime = dayjs(slotStartDateTime)
        .add(30, "minute")
        .toDate();

      return {
        slotStartDateTime: slotStartDateTime.toISOString(),
        slotEndDateTime: slotEndDateTime.toISOString(),
        duration: 30,
        slotStock: 2,
        slotBookingCount: 0,
      };
    });
  })
  .flat();

export const reservationHistory = [
  {
    id: 1,
    itemDetail: {
      images: ["https://placehold.co/200"],
      itemName: "아이템 이름",
      quantity: 1,
      pickupLocation: "픽업 장소",
      returnLocation: "반납 장소",
      group: { name: "그룹 이름" },
    },
    pickupTime: "2025-02-06T10:00:00",
    returnTime: "2025-02-06T12:00:00",
    status: "reserved",
  },
  {
    id: 2,
    itemDetail: {
      images: ["https://placehold.co/200"],
      itemName: "아이템 이름",
      quantity: 1,
      pickupLocation: "픽업 장소",
      returnLocation: "반납 장소",
      group: { name: "그룹 이름" },
    },
    pickupTime: "2025-02-06T10:00:00",
    returnTime: "2025-02-06T12:00:00",
    status: "rented",
  },
  {
    id: 3,
    itemDetail: {
      images: ["https://placehold.co/200"],
      itemName: "아이템 이름",
      group: { name: "그룹 이름" },
      quantity: 1,
      pickupLocation: "픽업 장소",
      returnLocation: "반납 장소",
    },
    pickupTime: "2025-02-06T10:00:00",
    returnTime: "2025-02-06T12:00:00",
    status: "returned",
  },
];

export const reservationDetail = {
  id: 1,
  itemDetail: {
    images: ["https://placehold.co/200"],
    itemName: "아이템 이름",
    quantity: 1,
    pickupLocation: "픽업 장소",
    returnLocation: "반납 장소",
    group: { name: "그룹 이름" },
  },
  pickupTime: "2025-02-06T10:00:00",
  returnTime: "2025-02-06T12:00:00",
  pickupInfo: {
    time: "2025-02-06T10:00:00",
    images: ["https://placehold.co/200", "https://placehold.co/200"],
  },
  returnInfo: {
    time: "2025-02-06T12:00:00",
    images: ["https://placehold.co/200", "https://placehold.co/200"],
  },
  status: "returned",
};
