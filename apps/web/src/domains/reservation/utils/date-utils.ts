import dayjs from "dayjs";

export function formatReservationDateTime(date: string): string {
  return dayjs(date).format("YYYY.MM.DD(ddd) A hh:mm");
}
