import Page from "@/components/page";
import GroupInfoEditDialog from "@/groups/components/group-info-edit-dialog";
import GroupItemsManageDialog from "@/groups/components/group-items-manage-dialog";
import GroupMembersManageDialog from "@/groups/components/group-members-manage-dialog";
import { membersData } from "@/groups/data";
import ItemList from "@/items/components/item-list";
import { groupItems } from "@/items/data";
import { BackChevronIcon, RightChevronIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import {
  ListHeader,
  ListHeaderAction,
  ListHeaderTitle,
} from "@repo/ui/list-header";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";

const groupManageData = {
  id: 1,
  name: "🎾테린이들의 테니스 모임🎾",
  image: "https://placehold.co/200",
  introduction:
    "안녕하세요 클럽들어가기도 어렵고 함께 칠 사람도 없어서 만들게 되었습니다 즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나",
  members: 38,
  user: {
    isOwner: true,
  },
  notice:
    "즐겁게 테니스치실분들 환영해요👏👏 서로 코트예약 성공하면 같이 나가서 테니스치실분들 모집합니당",
};

export default function GroupManagePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <BackChevronIcon />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹 상세</TopNavigationTitle>
      </TopNavigation>
      <section className="bg-white pt-6.5 px-4.5 pb-6">
        <div className="flex gap-3">
          <Image
            unoptimized
            width={60}
            height={60}
            src={groupManageData.image}
            alt={groupManageData.name}
            className="rounded-sm"
          />
          <div className="flex-1">
            <h1 className="text-heading-3 line-clamp-2">
              {groupManageData.name}
            </h1>
            <span className="mt-1.5 text-body-4 text-gray-600">
              멤버수 {groupManageData.members}
            </span>
          </div>
          <div className="flex items-center">
            <GroupInfoEditDialog />
          </div>
        </div>
      </section>

      <section className="mt-2 pt-6.5 pb-8 bg-white">
        <GroupMembersManageDialog>
          <ListHeader>
            <ListHeaderTitle>
              그룹멤버 {groupManageData.members}
            </ListHeaderTitle>
            <ListHeaderAction>
              <IconButton>
                <RightChevronIcon />
              </IconButton>
            </ListHeaderAction>
          </ListHeader>
        </GroupMembersManageDialog>
        <div className="mt-4">
          {membersData.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-2 h-15 py-2 px-4.5"
            >
              <Image
                unoptimized
                width={36}
                height={36}
                src={member.image}
                alt={member.name}
                className="rounded-full"
              />
              <div className="flex-1 flex items-center gap-1.5">
                <p className="text-body-1">{member.name}</p>
                {member.role === "admin" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="관리자"
                  >
                    <rect width="18" height="18" rx="9" fill="#5C3BF3" />
                    <path
                      d="M4.5 6.1875L6.75 8.4375L9 6.1875L11.25 8.4375L13.5 6.1875L12.375 11.8125H5.625L4.5 6.1875Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-2 pt-6.5 bg-white flex-1">
        <GroupItemsManageDialog>
          <ListHeader>
            <ListHeaderTitle>공용물품 리스트</ListHeaderTitle>
            <ListHeaderAction>
              <IconButton>
                <RightChevronIcon />
              </IconButton>
            </ListHeaderAction>
          </ListHeader>
        </GroupItemsManageDialog>
        <div className="mt-4">
          <ItemList items={groupItems} />
        </div>
      </section>
    </Page>
  );
}
