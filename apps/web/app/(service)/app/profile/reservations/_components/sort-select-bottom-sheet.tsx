import { CloseIcon } from "@repo/icons";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@repo/ui/bottom-sheet";
import { Button } from "@repo/ui/button";
import { FixedBottomActions } from "@repo/ui/fixed-bottom";
import { IconButton } from "@repo/ui/icon-button";
import { Label } from "@repo/ui/label";
import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group";
import { useState } from "react";

export default function SortSelectBottomSheet({
  children,
  defaultSort,
  setSort,
}: {
  children: React.ReactNode;
  defaultSort: "recent" | "old";
  setSort: React.Dispatch<React.SetStateAction<"recent" | "old">>;
}) {
  const [open, setOpen] = useState(false);
  const [sort, setLocalSort] = useState(defaultSort);

  return (
    <BottomSheet open={open} onOpenChange={setOpen}>
      <BottomSheetTrigger asChild>{children}</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>정렬</BottomSheetTitle>
          <BottomSheetDescription className="sr-only">
            예약 목록 정렬 방식을 선택하세요.
          </BottomSheetDescription>
          <BottomSheetClose asChild>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </BottomSheetClose>
        </BottomSheetHeader>
        <form className="px-4.5 pt-3.5 pb-10 gap-2 flex flex-col">
          <RadioGroup
            defaultValue={defaultSort}
            onValueChange={(value) => setLocalSort(value as "recent" | "old")}
          >
            <div className="flex items-center space-x-2 py-1.5">
              <RadioGroupItem value="recent" id="sort-recent" />
              <Label htmlFor="sort-recent">최신순</Label>
            </div>
            <div className="flex items-center space-x-2 py-1.5">
              <RadioGroupItem value="returned" id="sort-returned" />
              <Label htmlFor="sort-returned">반납 날짜 순</Label>
            </div>
          </RadioGroup>
        </form>
        <FixedBottomActions columns="2">
          <Button
            variant="tertiary"
            fullWidth
            size="large"
            onClick={() => {
              setLocalSort("recent");
              setSort("recent");
              setOpen(false);
            }}
          >
            초기화
          </Button>
          <Button
            variant="secondary"
            fullWidth
            size="large"
            className="col-span-2"
            onClick={() => {
              setSort(sort);
              setOpen(false);
            }}
          >
            선택완료
          </Button>
        </FixedBottomActions>
      </BottomSheetContent>
    </BottomSheet>
  );
}
