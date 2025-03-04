import { ItemService } from "@/domains/item/services/item-service";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

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
  queryOptions({
    queryKey: ["items", { search, group, sort }],
    queryFn: async () => {
      return ItemService.fetchItems({
        search,
        group,
        sort,
      });
    },
  });

export const useFetchItems = ({
  search,
  group,
  sort,
}: UseFetchItemsOptions) => {
  return useSuspenseQuery(fetchItemsOptions({ search, group, sort }));
};
