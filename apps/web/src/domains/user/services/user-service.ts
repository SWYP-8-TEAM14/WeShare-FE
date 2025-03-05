import { UserRepository } from "@/domains/user/repositories/user-repository";

export class UserService {
  static async fetchProfile() {
    return UserRepository.fetchProfile();
  }
}
