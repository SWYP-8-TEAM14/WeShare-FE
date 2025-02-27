import { GroupService } from "@/domains/group/services/group-service";
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

interface UseFetchGroupsOptions {
  filter: "all" | "own";
  sort: "default" | "many-members";
}

export const fetchGroupsOptions = ({ filter, sort }: UseFetchGroupsOptions) =>
  infiniteQueryOptions({
    queryKey: ["groups", { filter, sort }],
    queryFn: async ({ pageParam = 1 }) => {
      const groups = await GroupService.fetchGroups({
        filter,
        sort,
        page: pageParam,
        limit: 20,
      });
      return groups;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 20) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

export const useFetchGroups = ({ filter, sort }: UseFetchGroupsOptions) => {
  return useSuspenseInfiniteQuery(fetchGroupsOptions({ filter, sort }));
};
