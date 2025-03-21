"use client";
import BottomNavigation from "@/components/bottom-navigation";
import { useFetchGroups } from "@/domains/group/hooks/use-fetch-groups";
import { FixedBottom } from "@repo/ui/fixed-bottom";
import { FloatingButton } from "@repo/ui/floating-button";
import Image from "next/image";
import Link from "next/link";
import GroupList from "./group-list";
import GroupsControls from "./groups-controls";

interface MyGroupsProps {
  filter: "all" | "own";
  sort: "default" | "many-members";
}

export default function MyGroups({ filter, sort }: MyGroupsProps) {
  const { data: groups } = useFetchGroups({ filter, sort });

  if (groups.length === 0) {
    return (
      <>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="sr-only">내 그룹</h1>
          <div className="flex flex-col items-center">
            <Image
              unoptimized
              src="/images/empty-groups.png"
              width={100}
              height={100}
              alt="empty-groups"
            />
            <div className="text-center mt-4.5 max-w-44">
              <span className="text-heading-4 text-center">
                아직 내 그룹이 없어요!
              </span>
              <p className="text-body-5 text-gray-800 text-center  mt-2">
                그룹을 만들어 멤버들과 함께 공용 물품을 관리해보세요!
              </p>
            </div>
            <Link
              href={`/app/groups/new`}
              className="mt-8 flex items-center justify-center rounded-full px-2.5 py-[13px] border border-black/10 bg-white w-[130px] text-body-3 text-gray-700"
            >
              그룹 생성하기
            </Link>
          </div>
        </div>
        <FixedBottom>
          <BottomNavigation currentTab="groups" />
        </FixedBottom>
      </>
    );
  } else {
    return (
      <>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="sr-only">내 그룹</h1>
          <GroupsControls filter={filter} sort={sort} />
          <GroupList
            groups={groups.map((group) => ({
              id: group.id,
              name: group.name,
              image: group.image,
              introduction: group.description,
              members: group.memberCount,
            }))}
          />
        </div>
        <FixedBottom>
          <FloatingButton asChild>
            <Link href={`/app/groups/new`}>그룹 추가하기</Link>
          </FloatingButton>
          <BottomNavigation currentTab="groups" />
        </FixedBottom>
      </>
    );
  }
}
