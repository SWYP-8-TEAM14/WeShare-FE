import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");

  //redirect to home page
  if (!accessToken || !refreshToken) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }

  // Store the tokens in cookies option: {httpOnly: true, secure: true,sameSite: "lax"}
  // accessToken: 1 hour, refreshToken: 1 day
  cookieStore.set("accessToken", accessToken, {
    maxAge: 3600,
    httpOnly: false,
    secure: true,
    sameSite: "strict",
  });
  cookieStore.set("refreshToken", refreshToken, {
    maxAge: 86400,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  // redirect to app page
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/app",
    },
  });
}
