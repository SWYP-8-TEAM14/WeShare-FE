"use client";
import { BackChevronIcon, EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import {
  FullScreenDialog,
  FullScreenDialogClose,
  FullScreenDialogContent,
  FullScreenDialogTitle,
  FullScreenDialogTrigger,
} from "@repo/ui/full-screen-dialog";
import { IconButton } from "@repo/ui/icon-button";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";

export default function GroupInfoEditDialog() {
  return (
    <FullScreenDialog>
      <FullScreenDialogTrigger asChild>
        <Button size="small" variant="tertiary">
          편집
        </Button>
      </FullScreenDialogTrigger>
      <FullScreenDialogContent>
        <TopNavigation>
          <TopNavigationLeft>
            <FullScreenDialogClose asChild>
              <IconButton>
                <BackChevronIcon />
              </IconButton>
            </FullScreenDialogClose>
          </TopNavigationLeft>
          <TopNavigationTitle>
            <FullScreenDialogTitle>그룹 정보 수정</FullScreenDialogTitle>
          </TopNavigationTitle>
        </TopNavigation>
        <div className="flex-1">
          {/* 그룹 이미지 입력 */}
          <div className="py-6.5 flex flex-col items-center">
            <label className="relative inline-flex">
              <span className="sr-only">그룹 이미지</span>
              <img
                className="w-18.5 h-18.5 rounded-sm"
                src="https://placehold.co/74"
                alt="그룹 이미지"
              />
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center absolute -right-1 -bottom-1 text-white">
                <EditIcon className="size-5.5" />
              </div>
              <input type="file" className="hidden" accept="image/*" />
            </label>
            <p className="mt-3 text-heading-2">그룹 이름</p>
            <p className="text-body-4 text-gray-600 mt-1.5">멤버수 10</p>
          </div>
          {/* 그룹 정보 입력 */}
          <div className="py-6.5 px-4.5 flex flex-col gap-7.5">
            <TextField
              label="그룹 이름"
              placeholder="그룹 이름을 입력해주세요"
            />
            <Textarea
              label="그룹 소개"
              placeholder="그룹 소개를 입력해주세요"
              maxLength={100}
            />
          </div>
        </div>
        <FixedBottom>
          <FixedBottomActions>
            <Button fullWidth size="large" variant="secondary">
              저장하기
            </Button>
          </FixedBottomActions>
        </FixedBottom>
      </FullScreenDialogContent>
    </FullScreenDialog>
  );
}
