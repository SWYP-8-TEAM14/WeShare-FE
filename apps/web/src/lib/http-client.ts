import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function getAccessToken():
  | Promise<string | undefined>
  | string
  | undefined {
  return typeof window === "undefined"
    ? require("next/headers")
        .cookies()
        .then(
          (cookieStore: ReadonlyRequestCookies) =>
            cookieStore.get("accessToken")?.value
        )
    : require("js-cookie").get("accessToken");
}
