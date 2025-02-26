import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { profile } from "@/domains/user/data";
import { EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";

export default function ProfileEditPage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>프로필 수정</TopNavigationTitle>
      </TopNavigation>
      <div className="bg-white">
        <div className="py-6.5 px-2.5 flex flex-col items-center justify-center gap-3">
          <div className="relative">
            <Image
              unoptimized
              src={profile.profileImage}
              alt="프로필 이미지"
              width={74}
              height={74}
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
              <EditIcon className="text-white size-5.5" />
            </div>
          </div>
          <span className="text-heading-2">{profile.fullName}님</span>
        </div>
        <div className="pb-6.5 px-4.5">
          <TextField
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            value={profile.nickname}
          />
        </div>
      </div>
      <div className="mt-2 bg-white">
        <button className="text-heading-4 text-gray-800 p-5 w-full text-left">
          로그아웃
        </button>
      </div>
      <button className="text-gray-700 text-body-6 ml-5 mr-auto  mt-5">
        회원탈퇴
      </button>
      <FixedBottom>
        <FixedBottomActions>
          <Button fullWidth size="large" variant="secondary">
            저장하기
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </Page>
  );
}
