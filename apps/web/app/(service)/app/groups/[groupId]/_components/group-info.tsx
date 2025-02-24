import { Button } from "@repo/ui/button";
import Image from "next/image";
import Link from "next/link";

interface GroupInfoProps {
  group: {
    id: number;
    name: string;
    image: string;
    introduction: string;
    members: number;
    notice: string;
  };
  viewerIsOwner?: boolean;
}

export default function GroupInfo({
  group,
  viewerIsOwner = false,
}: GroupInfoProps) {
  return (
    <section className="bg-white pt-6.5 px-4.5 pb-8">
      <h1 className="sr-only">{group.name} 그룹</h1>
      <h2 className="sr-only">그룹 정보</h2>
      <div className="flex gap-3">
        <Image
          unoptimized
          width={60}
          height={60}
          src={group.image}
          alt={group.name}
          className="rounded-sm"
        />
        <div>
          <p className="text-heading-3 line-clamp-2">{group.name}</p>
          <span className="mt-1.5 text-body-4 text-gray-600">
            멤버수 {group.members}
          </span>
        </div>
      </div>

      <hr className="my-3.5 h-px bg-gray-200 border-none" />

      <p className="text-body-2 text-gray-800">{group.introduction}</p>
      <div className="mt-4 text-gray-800 rounded-sm bg-gray-100 py-4 px-4.5">
        <p className="text-heading-5">대여시 주의사항</p>
        <p className="mt-2 text-body-5">{group.notice}</p>
      </div>
      {viewerIsOwner && (
        <div className="mt-5 flex gap-2">
          <Button variant="tertiary" fullWidth>
            멤버 초대하기
          </Button>

          <Button variant="secondary" fullWidth asChild>
            <Link href={`/app/groups/${group.id}/manage`}>그룹 관리</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
