"use client";
import { BackChevronIcon, EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { FloatingButton } from "@repo/ui/floating-button";
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

export default function GroupCreateDialog() {
  return (
    <FullScreenDialog>
      <FullScreenDialogTrigger asChild>
        <FloatingButton>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icn/plus">
              <path
                id="Union"
                d="M7 1.75C6.59729 1.75 6.27083 2.07646 6.27083 2.47917V6.27079L2.47917 6.27079C2.07646 6.27079 1.75 6.59725 1.75 6.99996C1.75 7.40267 2.07646 7.72913 2.47917 7.72913H6.27083V11.5208C6.27083 11.9235 6.59729 12.25 7 12.25C7.40271 12.25 7.72917 11.9235 7.72917 11.5208V7.72913H11.5208C11.9235 7.72913 12.25 7.40267 12.25 6.99996C12.25 6.59725 11.9235 6.27079 11.5208 6.27079H7.72917V2.47917C7.72917 2.07646 7.40271 1.75 7 1.75Z"
                fill="currentColor"
              />
            </g>
          </svg>
          그룹 추가하기
        </FloatingButton>
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
            <FullScreenDialogTitle>그룹 생성</FullScreenDialogTitle>
          </TopNavigationTitle>
        </TopNavigation>
        <div className="flex-1">
          {/* 그룹 이미지 입력 */}
          <div className="py-6.5 flex justify-center">
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
              그룹 생성하기
            </Button>
          </FixedBottomActions>
        </FixedBottom>
      </FullScreenDialogContent>
    </FullScreenDialog>
  );
}
