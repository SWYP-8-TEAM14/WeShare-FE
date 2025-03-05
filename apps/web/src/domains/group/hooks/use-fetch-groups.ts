import { GroupService } from "@/domains/group/services/group-service";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

interface UseFetchGroupsOptions {
  filter: "all" | "own";
  sort: "default" | "many-members";
}

export const fetchGroupsOptions = ({ filter, sort }: UseFetchGroupsOptions) =>
  queryOptions({
    queryKey: ["groups", { filter, sort }],
    queryFn: async () => {
      return GroupService.fetchGroups({
        filter,
        sort,
      });
    },
  });

export const useFetchGroups = ({ filter, sort }: UseFetchGroupsOptions) => {
  return useSuspenseQuery(fetchGroupsOptions({ filter, sort }));
};
