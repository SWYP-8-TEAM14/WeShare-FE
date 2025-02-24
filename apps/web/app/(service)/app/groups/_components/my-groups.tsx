import { DownChevronIcon } from "@repo/icons";
import { Checkbox } from "@repo/ui/checkbox";
import { Label } from "@repo/ui/label";
import Image from "next/image";
import Link from "next/link";

interface MyGroupsProps {
  groups: {
    id: number;
    name: string;
    image: string;
    introduction: string;
    members: number;
    user: {
      isOwner: boolean;
    };
  }[];
}

export default function MyGroups({ groups }: MyGroupsProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="sr-only">내 그룹</h1>
      {groups.length === 0 ? (
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
          <button className="mt-8 rounded-full px-2.5 py-[13px] border border-black/10 bg-white w-[130px] text-body-3 text-gray-700">
            그룹 생성하기
          </button>
        </div>
      ) : (
        <>
          <div className="h-15 flex items-center justify-between w-full">
            <Label
              className="text-gray-700 flex items-center gap-2 ml-4.5"
              size="sm"
            >
              <Checkbox size="sm" />
              내가 만든 그룹만 보기
            </Label>
            <div className="mr-2.5">
              <label htmlFor="group-sort" className="relative"></label>
              <div className="relative">
                <select
                  name="group-sort"
                  id="group-sort"
                  className="appearance-none text-body-6 font-semibold text-gray-700 text-right px-8 py-4"
                >
                  <option value="default">기본순</option>
                  <option value="most_member">멤버 많은 순</option>
                </select>
                <DownChevronIcon className="size-4 text-gray-700 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 bg-white pt-3">
            {groups.map((group, index) => (
              <Link
                key={group.id}
                href={`/app/groups/${group.id}`}
                className="flex gap-2 justify-between px-4.5 py-2"
              >
                <Image
                  unoptimized
                  src={group.image}
                  width={74}
                  height={74}
                  alt="group"
                  className="rounded-sm"
                />
                <div className="flex-1">
                  <p className="text-heading-3 line-clamp-1">{group.name}</p>
                  <p className="text-body-5 text-gray-800 line-clamp-1 mt-1">
                    {group.introduction}
                  </p>
                  <span className="text-detail-2 text-gray-600 mt-1.5">
                    멤버수 {group.members}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
