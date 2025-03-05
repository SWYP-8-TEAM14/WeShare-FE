"use client";

import Page from "@/components/page";
import { Button } from "@repo/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body>
        <Page className="items-center justify-center">
          <h2 className="text-xl">알 수 없는 에러가 발생했습니다</h2>
          <div className="mt-6 flex flex-col gap-4">
            <Button onClick={() => reset()}>다시 시도하기</Button>
            <Button variant="tertiary" asChild>
              <a href="/">홈으로</a>
            </Button>
          </div>
        </Page>
      </body>
    </html>
  );
}
