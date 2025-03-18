import { fetchClient } from "@/lib/fetch-client";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return redirect("/login");
  }

  const { response } = await fetchClient.POST("/auth/login/kakao/callback", {
    body: {
      code,
    },
    credentials: "include",
    headers: new Headers(request.headers),
  });

  const headers = new Headers(response.headers);
  headers.set("Location", "/app");

  // redirect to /app and set cookie
  return new Response(null, {
    status: 302,
    headers,
  });
}
