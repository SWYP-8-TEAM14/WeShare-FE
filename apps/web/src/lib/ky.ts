import { clientEnv } from "@/lib/client-env";
import { getAccessToken } from "@/lib/http-client";
import ky from "ky";

const httpClient = ky.create({
  prefixUrl: clientEnv.API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = await getAccessToken();
        console.log(`token: ${token}`);
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

export default httpClient;
