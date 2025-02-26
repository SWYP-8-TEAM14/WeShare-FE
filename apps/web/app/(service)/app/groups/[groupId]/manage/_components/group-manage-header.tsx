import { Button } from "@repo/ui/button";
import Image from "next/image";
import Link from "next/link";

interface GroupManageHeaderProps {
  groupInfo: {
    id: number;
    name: string;
    image: string;
    introduction: string;
    members: number;
    user: {
      isOwner: boolean;
    };
  };
}

export default function GroupManageHeader({
  groupInfo,
}: GroupManageHeaderProps) {
  return (
    <section className="bg-white pt-6.5 px-4.5 pb-6">
      <h2 className="sr-only">그룹 정보</h2>
      <div className="flex gap-3">
        <Image
          unoptimized
          width={60}
          height={60}
          src={groupInfo.image}
          alt={groupInfo.name}
          className="rounded-sm"
        />
        <div className="flex-1">
          <p className="text-heading-3 line-clamp-2">{groupInfo.name}</p>
          <span className="mt-1.5 text-body-4 text-gray-600">
            멤버수 {groupInfo.members}
          </span>
        </div>
        <div className="flex items-center">
          <Button size="small" variant="tertiary">
            <Link href={`/app/groups/${groupInfo.id}/manage/info`}>편집</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
