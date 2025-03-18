import { serverEnv } from "@/lib/server-env";

export class AuthService {
  static async fetchKakaoLoginUrl() {
    const url = "https://kauth.kakao.com/oauth/authorize";
    const params = new URLSearchParams({
      client_id: serverEnv.KAKAO_CLIENT_ID,
      redirect_uri: serverEnv.KAKAO_REDIRECT_URI,
      response_type: "code",
    });
    return `${url}?${params.toString()}`;
  }
}
