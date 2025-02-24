import Image from "next/image";

export default function Header() {
  return (
    <div className="px-4.5 h-12.5 flex items-center justify-between">
      <Image
        unoptimized
        src="/logo_small.svg"
        width={80}
        height={31}
        alt="weshare"
      />
      <h1 className="sr-only">WeShare</h1>
    </div>
  );
}
