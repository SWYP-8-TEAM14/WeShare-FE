export const bookableItems = [
  {
    id: 1,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
    user: {
      isLiked: true,
    },
  },
  {
    id: 2,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
    user: {
      isLiked: false,
    },
  },
  {
    id: 3,
    image: "https://placehold.co/200",
    groupName: "🎾테린이들의 테니스 모임🎾",
    itemStatus: "예약 중",
    itemName: "원형 사이드 테이블",
    user: {
      isLiked: true,
    },
  },
];

export const groupItems = [
  {
    id: 1,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
    user: {
      isLiked: true,
    },
  },
  {
    id: 2,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
    user: {
      isLiked: false,
    },
  },
  {
    id: 3,
    image: "https://placehold.co/200",
    groupName: "🎾테린이들의 테니스 모임🎾",
    itemStatus: "예약 중",
    itemName: "원형 사이드 테이블",
    user: {
      isLiked: true,
    },
  },
];

export const itemsOfGroup = [
  {
    id: 1,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
  },
  {
    id: 2,
    image: "https://placehold.co/200",
    groupName: "도보마포",
    itemStatus: "예약 가능",
    itemName: "빅토리아니키 125",
  },
  {
    id: 3,
    image: "https://placehold.co/200",
    groupName: "🎾테린이들의 테니스 모임🎾",
    itemStatus: "예약 중",
    itemName: "원형 사이드 테이블",
  },
];

export const itemDetail = {
  id: 1,
  group: {
    id: 1,
    name: "도보마포",
    image: "https://placehold.co/200",
  },
  itemName: "뽀로로 코딩 컴퓨터",
  images: [
    "https://placehold.co/300x300/lightpink/white",
    "https://placehold.co/300x300/lightsalmon/white",
    "https://placehold.co/300x300/violet/white",
  ],
  quantity: 2,
  details: `생일 선물로 사놨는데 안가지고 놀아서 공유 물품으로 내놓습니다.
상자에 넣으면서 겉면 살짝 자국났는데 거의 티안나요. 
두번째 사진 참고해주세요.`,
  caution:
    "대여시 취소는 불가하며 픽업 장소인 사무실 1층으로 반납해 주시면 됩니다.",
  pickupLocation: "1층 사무실",
  returnLocation: "1층 사무실 문 옆",
  previousRenters: [
    {
      id: 1,
      name: "그린우드",
      profileImage: "https://placehold.co/200",
      period: {
        start: "2024-09-01",
        end: "2024-09-03",
        text: "2024년 9월 1일 ~ 2024년 9월 3일",
      },
    },
    {
      id: 2,
      name: "꼬마열차",
      profileImage: "https://placehold.co/200",
      period: {
        start: "2025-01-01",
        end: "2025-01-03",
        text: "2025년 1월 1일 ~ 2025년 1월 3일",
      },
    },
    {
      id: 3,
      name: "문짝",
      profileImage: "https://placehold.co/200",
      period: {
        start: "2025-02-14",
        end: "2025-02-17",
        text: "2025년 2월 14일 ~ 2025년 2월 17일",
      },
    },
  ],
};
