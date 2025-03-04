export function getItemStatusText(status: number): string {
  switch (status) {
    case 0:
      return "예약 가능";
    case 1:
      return "대여 중";
    case 2:
      return "반납 예정";
    default:
      throw new Error(`유효하지 않은 상태 값: ${status}`);
  }
}
