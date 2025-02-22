export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-sm mx-auto min-h-dvh outline outline-gray-200">
      {children}
    </div>
  );
}
