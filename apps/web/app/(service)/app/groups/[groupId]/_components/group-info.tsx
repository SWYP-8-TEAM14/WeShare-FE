import { Button } from "@repo/ui/button";
import Image from "next/image";
import Link from "next/link";
import GroupInviteButton from "./group-invite-button";

interface GroupInfoProps {
  group: {
    id: number;
    name: string;
    image: string;
    introduction: string;
    members: number;
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
      {viewerIsOwner && (
        <div className="mt-5 flex gap-2">
          <GroupInviteButton />

          <Button variant="secondary" fullWidth asChild>
            <Link href={`/app/groups/${group.id}/manage`}>그룹 관리</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
