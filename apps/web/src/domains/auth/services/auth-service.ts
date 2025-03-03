import { AuthRepository } from "@/domains/auth/repositories/auth-repository";

export class AuthService {
  static async fetchKakaoLoginUrl() {
    const response = await AuthRepository.fetchKakaoLoginUrl();

    return {
      authUrl: response.auth_url,
    };
  }
}
