import { UserService } from "@/domains/user/services/user-service";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const fetchUserOptions = () =>
  queryOptions({
    queryKey: ["user"],
    queryFn: async () => {
      return UserService.fetchProfile();
    },
  });

export const useFetchUser = () => {
  return useSuspenseQuery(fetchUserOptions());
};
