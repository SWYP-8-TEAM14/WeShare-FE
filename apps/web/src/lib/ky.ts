import { clientEnv } from "@/lib/client-env";
import ky from "ky";

const httpClient = ky.create({
  prefixUrl: clientEnv.NEXT_PUBLIC_API_URL,
});

export default httpClient;
