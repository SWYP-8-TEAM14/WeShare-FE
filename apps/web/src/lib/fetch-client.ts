import { clientEnv } from "@/lib/client-env";
import { paths } from "@/types/api-schema";
import createClient, { Middleware } from "openapi-fetch";
const cookieMiddleware: Middleware = {
  async onRequest({ request, options }) {
    if (typeof window == "undefined") {
      const session = await import("next/headers").then((headers) =>
        headers.cookies().then((cookies) => cookies.get("s_id")?.value)
      );

      request.headers.set("cookie", `s_id=${session}`);
    }
  },
};
export const fetchClient = createClient<paths>({
  baseUrl: clientEnv.API_URL,
  credentials: "include",
});

fetchClient.use(cookieMiddleware);
