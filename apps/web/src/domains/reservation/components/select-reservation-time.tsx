"use client";
import { cn } from "@repo/ui/utils";

interface SelectReservationTimeProps {
  times: {
    slotDateTime: string;
    duration: number;
    slotStock: number;
    slotBookingCount: number;
    bookable: boolean;
  }[];
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
  selectedDate: string | null;
  setSelectedDate: (date: string) => void;
}

function groupByDay(times: SelectReservationTimeProps["times"]) {
  const dates = times
    .map((time) => time.slotDateTime.split("T")[0])
    .filter((date) => date !== undefined);
  const uniqueDates = Array.from(new Set(dates));

  const result = uniqueDates.map((date) => {
    return {
      date,
      availableTimes: times.filter(
        (time) => time.slotDateTime.split("T")[0] === date
      ),
    };
  });

  return result;
}

export default function SelectReservationTime({
  times,
  selectedTime,
  setSelectedTime,
  selectedDate,
  setSelectedDate,
}: SelectReservationTimeProps) {
  // 일자별로 그룹핑
  const groupedTimes = groupByDay(times);

  const visibleTimes = groupedTimes.find(
    (groupedTime) => groupedTime.date === selectedDate
  );

  return (
    <div className="flex flex-col gap-6.5 py-6.5">
      {/* 날짜 선택 */}
      <div>
        <span className="text-heading-5 mx-4.5">날짜</span>
        <div className="mt-3 flex gap-2 overflow-x-auto px-4.5">
          {groupedTimes.map((timeSlot) => {
            const isSelected = timeSlot.date === selectedDate;
            return (
              <button
                key={timeSlot.date}
                className={cn(
                  "flex flex-col items-center gap-0.5 border rounded-sm py-3.5 px-2.5",
                  isSelected
                    ? "border-primary-500 bg-primary-500/10"
                    : "border-black/10"
                )}
                onClick={() => setSelectedDate(timeSlot.date)}
              >
                {/* 요일을 한글로 표시 ex.목, 금, 토 */}
                <span
                  className={cn(
                    "text-body-4",
                    isSelected ? "text-primary-500" : "text-gray-700"
                  )}
                >
                  {new Date(timeSlot.date).toLocaleDateString("ko-KR", {
                    weekday: "short",
                  })}
                </span>
                {/* 날짜를 MM/DD 형식으로 표시 */}
                <span
                  className={cn(
                    "text-body-3",
                    isSelected ? "text-primary-500" : "text-gray-700"
                  )}
                >
                  {timeSlot.date.slice(5).replace("-", "/")}
                </span>
                <input hidden type="radio" name="reservation-date" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 시간 선택 오전 */}
      <div>
        <span className="text-heading-5 mx-4.5">오전</span>
        <div className="mt-3 grid grid-cols-3 gap-[9px] px-4.5">
          {visibleTimes?.availableTimes
            .filter((time) => {
              return new Date(time.slotDateTime).getHours() < 12;
            })
            .map((time) => {
              const isSelected = time.slotDateTime === selectedTime;
              return (
                <button
                  key={time.slotDateTime}
                  className={cn(
                    "flex justify-center items-center gap-2 border rounded-sm py-3 px-2 h-11 disabled:bg-gray-200 disabled:text-gray-500",
                    isSelected
                      ? "text-body-3 text-primary-500 border-primary-500 bg-primary-500/10"
                      : "text-body-4 text-gray-800 border-black/10"
                  )}
                  onClick={() => {
                    setSelectedTime(time.slotDateTime);
                  }}
                  aria-selected={isSelected}
                  disabled={!time.bookable}
                >
                  <span>
                    {new Date(time.slotDateTime).toLocaleTimeString("ko-KR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      {/* 시간 선택 오후 */}
      <div>
        <span className="text-heading-5 mx-4.5">오후</span>
        <div className="mt-3 grid grid-cols-3 gap-[9px] px-4.5">
          {visibleTimes?.availableTimes
            .filter((time) => {
              return new Date(time.slotDateTime).getHours() >= 12;
            })
            .map((time) => {
              const isSelected = time.slotDateTime === selectedTime;

              return (
                <button
                  key={time.slotDateTime}
                  className={cn(
                    "flex justify-center items-center gap-2 border rounded-sm py-3 px-2 h-11 disabled:bg-gray-200 disabled:text-gray-500",
                    isSelected
                      ? "text-body-3 text-primary-500 border-primary-500 bg-primary-500/10"
                      : "text-body-4 text-gray-800 border-black/10"
                  )}
                  onClick={() => {
                    setSelectedTime(time.slotDateTime);
                  }}
                  aria-selected={isSelected}
                  disabled={!time.bookable}
                >
                  <span>
                    {new Date(time.slotDateTime).toLocaleTimeString("ko-KR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
