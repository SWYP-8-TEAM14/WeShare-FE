import { CloseIcon, LinkShareIcon } from "@repo/icons";
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
import { IconButton } from "@repo/ui/icon-button";
import Image from "next/image";

export default function GroupInviteButton() {
  return (
    <BottomSheet>
      <BottomSheetTrigger asChild>
        <Button variant="tertiary" fullWidth>
          멤버 초대하기
        </Button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>멤버 초대하기</BottomSheetTitle>
          <BottomSheetDescription className="sr-only">
            그룹 멤버를 초대할 수 있는 방법을 선택하세요.
          </BottomSheetDescription>
          <BottomSheetClose asChild>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </BottomSheetClose>
        </BottomSheetHeader>
        <div className="pt-3.5 px-4.5 pb-9">
          <div className="flex gap-2 items-center py-2">
            <Image
              unoptimized
              width={36}
              height={36}
              src="/images/invite_kakao-icon.png"
              alt="카카오톡"
            />
            <p className="text-body-4 py-2">카카오톡으로 초대하기</p>
          </div>
          <div className="flex gap-2 items-center py-2">
            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
              <LinkShareIcon className="text-gray-800" />
            </div>
            <p className="text-body-4">링크 복사하기</p>
          </div>
        </div>
      </BottomSheetContent>
    </BottomSheet>
  );
}
