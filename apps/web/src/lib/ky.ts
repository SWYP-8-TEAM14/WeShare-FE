import { clientEnv } from "@/lib/client-env";
import { getAccessToken } from "@/lib/http-client";
import ky, { BeforeRequestHook } from "ky";

const addContentLengthHeader: BeforeRequestHook = async (request, options) => {
  if (
    options.body &&
    !request.headers.has("Content-Length") &&
    typeof options.body === "string"
  ) {
    const ContentLength = new TextEncoder().encode(options.body).length;
    request.headers.set("Content-Length", ContentLength.toString());
  }
};

const addAccessTokenHeader: BeforeRequestHook = async (request) => {
  const accessToken = await getAccessToken();
  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }
};

const httpClient = ky.create({
  prefixUrl: clientEnv.API_URL,
  hooks: {
    beforeRequest: [addContentLengthHeader, addAccessTokenHeader],
  },
});

export default httpClient;
