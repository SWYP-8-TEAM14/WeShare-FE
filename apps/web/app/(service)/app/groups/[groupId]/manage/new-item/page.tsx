import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { AddPhotoslotIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";

export default function GroupNewItemPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>물품 추가</TopNavigationTitle>
      </TopNavigation>
      <div className="flex-1 bg-white">
        <div className="py-6.5 flex flex-col px-4.5">
          <div>
            <span className="text-heading-5">사진 등록</span>
            <p className="text-body-5 text-gray-600">
              공용물품 사진을 최대 4개 등록해 주세요.
            </p>
          </div>
          {/* 사진 업로드 */}
          <div className="mt-4">
            <div className="pt-2.5 w-20 h-20 flex flex-col items-center border border-gray-500 rounded-sm">
              <AddPhotoslotIcon className="size-4.5 text-gray-500" />
              <span className="text-body-6 mt-1.5">사진 업로드</span>
              <span className="text-detail-3 text-gray-700 mt-0.5">
                (0 / 4)
              </span>
            </div>
          </div>

          {/* 정보 입력 */}
          <div className="pt-8.5 flex flex-col gap-7.5">
            <TextField
              label="물품 이름"
              placeholder="물품 이름을 작성해 주세요."
            />
            <TextField
              type="number"
              label="물품 수량"
              min={1}
              max={999}
              step={1}
              endContent={<span className="text-body-2 text-gray-700">개</span>}
            />
            <Textarea
              label="상세 내용"
              maxLength={100}
              placeholder="물품에 대한 설명을 작성해 주세요."
            />
          </div>
        </div>
      </div>
      <FixedBottom>
        <FixedBottomActions>
          <Button variant="secondary" size="large">
            물품 추가
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
