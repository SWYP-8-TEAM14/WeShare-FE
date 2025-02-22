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

export const availableReservationTimeSlots = [
  {
    date: "2025-02-06",
    availableTimes: [
      "08:30",
      "10:00",
      "10:30",
      "12:30",
      "13:00",
      "14:00",
      "15:00",
    ],
  },
  {
    date: "2025-02-07",
    availableTimes: ["10:00", "18:00", "18:30", "19:00", "19:30"],
  },
  {
    date: "2025-02-08",
    availableTimes: [
      "08:30",
      "09:00",
      "10:00",
      "10:30",
      "11:30",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
    ],
  },
  {
    date: "2025-02-09",
    availableTimes: [],
  },
  {
    date: "2025-02-10",
    availableTimes: [],
  },
];

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
