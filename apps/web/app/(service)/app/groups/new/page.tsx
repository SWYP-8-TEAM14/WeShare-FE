import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";

export default function GroupCreatePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 생성</TopNavigationTitle>
      </TopNavigation>
      <div className="flex-1 bg-white">
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
          <TextField label="그룹 이름" placeholder="그룹 이름을 입력해주세요" />
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
    </Page>
  );
}
