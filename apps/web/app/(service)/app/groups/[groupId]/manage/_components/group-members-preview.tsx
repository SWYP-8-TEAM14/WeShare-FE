import Image from "next/image";

interface GroupMembersPreviewProps {
  members: {
    id: number;
    name: string;
    image: string;
    role: string;
  }[];
}

export default function GroupMembersPreview({
  members,
}: GroupMembersPreviewProps) {
  return (
    <div className="mt-4">
      {members.map((member) => (
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
  );
}
