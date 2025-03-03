import { DownChevronIcon } from "@repo/icons";
import { forwardRef } from "react";
import GroupCheckboxBottomSheet from "./group-checkbox-bottom-sheet";
import SortSelectBottomSheet from "./sort-select-bottom-sheet";

interface ReservationHistoryControlsProps {
  groupFilter: number[];
  setGroupFilter: React.Dispatch<React.SetStateAction<number[]>>;
  sort: "recent" | "old";
  setSort: React.Dispatch<React.SetStateAction<"recent" | "old">>;
}

export default function ReservationHistoryControls({
  groupFilter,
  setGroupFilter,
  sort,
  setSort,
}: ReservationHistoryControlsProps) {
  return (
    <div className="py-2.5 px-4.5 flex gap-2 items-center justify-end bg-white">
      <GroupCheckboxBottomSheet
        defaultGroupFilter={groupFilter}
        setGroupFilter={setGroupFilter}
      >
        <FilterChip>
          그룹 {groupFilter.length > 0 && ` ${groupFilter.length}`}
        </FilterChip>
      </GroupCheckboxBottomSheet>

      <SortSelectBottomSheet defaultSort={sort} setSort={setSort}>
        <FilterChip>{sort === "recent" ? "최신순" : "반납 날짜 순"}</FilterChip>
      </SortSelectBottomSheet>
    </div>
  );
}

const FilterChip = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className="flex items-center gap-0.5 bg-white rounded-full px-3 py-2 text-body-6 text-gray-700 border border-gray-200"
    >
      {children}
      <DownChevronIcon className="w-3 h-3" />
    </button>
  );
});
