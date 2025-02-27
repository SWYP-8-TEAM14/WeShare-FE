import Image from "next/image";
import Link from "next/link";

interface GroupListProps {
  groups: {
    id: number;
    name: string;
    image: string;
    introduction: string;
    members: number;
  }[];
}

export default function GroupList({ groups }: GroupListProps) {
  return (
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
  );
}
