export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[600px] mx-auto border-2 border-neutral-200 min-h-dvh">
      {children}
    </div>
  );
}
