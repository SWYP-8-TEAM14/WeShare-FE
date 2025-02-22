"use client";
import { BackChevronIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import { useRouter } from "next/navigation";

export default function RouterBackButton() {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.back()}>
      <BackChevronIcon className="text-gray-700" />
    </IconButton>
  );
}
