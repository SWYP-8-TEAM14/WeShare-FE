export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-sm mx-auto min-h-dvh overflow-hidden">{children}</div>
  );
}
