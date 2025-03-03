import { ItemService } from "@/domains/item/services/item-service";
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

interface UseFetchItemsOptions {
  search: string;
  group: string;
  sort: "recent" | "old";
}

export const fetchItemsOptions = ({
  search,
  group,
  sort,
}: UseFetchItemsOptions) =>
  infiniteQueryOptions({
    queryKey: ["items", { search, group, sort }],
    queryFn: async ({ pageParam = 1 }) => {
      const items = await ItemService.fetchItems({
        search,
        group,
        sort,
        page: pageParam,
        limit: 10,
      });
      return items;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

export const useFetchItems = ({
  search,
  group,
  sort,
}: UseFetchItemsOptions) => {
  return useSuspenseInfiniteQuery(fetchItemsOptions({ search, group, sort }));
};
