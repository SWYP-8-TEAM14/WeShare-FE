import httpClient from "@/lib/ky";

type LoginUrlResponse = {
  auth_url: string;
};

export class AuthRepository {
  static async fetchKakaoLoginUrl() {
    return httpClient
      .get<LoginUrlResponse>("users/user/auth/kakao/login")
      .json();
  }
}
