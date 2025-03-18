import { clientEnv } from "@/lib/client-env";
import { paths } from "@/types/api-schema";
import createClient from "openapi-fetch";

export const fetchClient = createClient<paths>({
  baseUrl: clientEnv.API_URL,
  credentials: "include",
});
