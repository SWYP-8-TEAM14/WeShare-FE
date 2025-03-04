import QueryProvider from "@/components/query-provider";
import "@repo/ui/styles.css";
import { Toaster } from "@repo/ui/toaster";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | WeShare`,
    default: "WeShare",
  },
  description: "간편한 공용물품 관리의 시작",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Toaster />
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
