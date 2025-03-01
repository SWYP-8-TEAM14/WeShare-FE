import { groupsData } from "@/domains/group/mocks";
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
import { Checkbox } from "@repo/ui/checkbox";
import { FixedBottomActions } from "@repo/ui/fixed-bottom";
import { IconButton } from "@repo/ui/icon-button";
import { Label } from "@repo/ui/label";
import { useState } from "react";

export default function GroupCheckboxBottomSheet({
  children,
  defaultGroupFilter,
  setGroupFilter,
}: {
  children: React.ReactNode;
  defaultGroupFilter: number[];
  setGroupFilter: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [open, setOpen] = useState(false);
  const [groupFilter, setLocalGroupFilter] = useState(defaultGroupFilter);

  console.log("open", open);
  return (
    <BottomSheet open={open} onOpenChange={setOpen}>
      <BottomSheetTrigger asChild>{children}</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>그룹</BottomSheetTitle>
          <BottomSheetDescription className="sr-only">
            예약 목록 필터링을 위해 그룹을 선택하세요.
          </BottomSheetDescription>
          <BottomSheetClose asChild>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </BottomSheetClose>
        </BottomSheetHeader>
        <form className="px-4.5 pt-3.5 pb-10 gap-2 flex flex-col">
          {groupsData.map((group) => (
            <div className="flex items-center gap-2 py-1.5" key={group.id}>
              <Checkbox
                id={group.id.toString()}
                name="group"
                value={group.id}
                checked={groupFilter.includes(group.id)}
                onCheckedChange={(checked) => {
                  setLocalGroupFilter((prev) =>
                    checked
                      ? [...prev, group.id]
                      : prev.filter((id) => id !== group.id)
                  );
                }}
              />
              <Label htmlFor={group.id.toString()}>{group.groupName}</Label>
            </div>
          ))}
        </form>
        <FixedBottomActions columns="2">
          <Button
            variant="tertiary"
            fullWidth
            size="large"
            onClick={() => {
              setLocalGroupFilter([]);
              setGroupFilter([]);
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
              setGroupFilter(groupFilter);
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
