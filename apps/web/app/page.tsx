import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      Home
      <Link href={"/app"}>App</Link>
    </main>
  );
}
