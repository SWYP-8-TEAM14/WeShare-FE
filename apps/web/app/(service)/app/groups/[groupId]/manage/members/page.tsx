import Page from "@/components/page";
import RouterBackButton from "@/components/router-back-button";
import { membersData } from "@/groups/data";
import { Checkbox } from "@repo/ui/checkbox";
import { Label } from "@repo/ui/label";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";

export default function GroupMembersManagePage() {
  return (
    <Page>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>멤버 관리</TopNavigationTitle>
      </TopNavigation>
      <div className="flex-1 bg-white">
        <div className="pt-6.5 flex flex-col px-4.5">
          <div className="flex justify-between items-center">
            <span className="text-heading-5 text-gray-800">그룹 멤버 10</span>
            <button className="text-gray-700 text-body-6">전체 선택</button>
          </div>
        </div>
        <div className="mt-3">
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
              <Label htmlFor={`member-${member.id}`} className="sr-only">
                {member.name}
              </Label>
              <Checkbox
                id={`member-${member.id}`}
                name={`member-${member.id}`}
                value={member.id}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
