import { clientEnv } from "@/lib/client-env";
import ky from "ky";

const httpClient = ky.create({
  prefixUrl: clientEnv.API_URL,
});

export default httpClient;
