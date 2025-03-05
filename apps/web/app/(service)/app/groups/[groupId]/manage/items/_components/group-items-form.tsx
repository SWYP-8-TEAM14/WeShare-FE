"use client";
import RouterBackButton from "@/components/router-back-button";
import { useDeleteItems } from "@/domains/group/hooks/use-delete-items";
import { useGroupItemsForm } from "@/domains/group/hooks/use-group-items-form";
import { useFetchItems } from "@/domains/item/hooks/use-fetch-items";
import { getItemStatusText } from "@/domains/item/utils/format";
import { Checkbox } from "@repo/ui/checkbox";
import { Label } from "@repo/ui/label";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import Image from "next/image";
import GroupItemsDeleteButton from "./group-items-delete-button";

export default function GroupItemsForm() {
  const deleteItems = useDeleteItems();
  const { data: items } = useFetchItems({
    search: "",
    group: "",
    sort: "recent",
  });
  const groupItemsForm = useGroupItemsForm({
    defaultValues: {
      itemIds: [],
    },
  });

  const selectedItemIds = groupItemsForm.watch("itemIds");

  return (
    <>
      <TopNavigation>
        <TopNavigationLeft>
          <RouterBackButton />
        </TopNavigationLeft>
        <TopNavigationTitle>그룹물품 관리</TopNavigationTitle>
        <TopNavigationRight>
          {selectedItemIds.length > 0 && (
            <GroupItemsDeleteButton
              itemIds={selectedItemIds}
              onDeleted={() => {
                groupItemsForm.reset();
              }}
            />
          )}
        </TopNavigationRight>
      </TopNavigation>
      <div className="flex-1 bg-white">
        <div className="py-6.5 flex flex-col px-4.5">
          <div className="flex justify-between items-center">
            <span className="text-heading-5 text-gray-800">그룹물품 10</span>
            {selectedItemIds.length > 0 ? (
              <button
                className="text-gray-700 text-body-6"
                type="button"
                onClick={() => {
                  groupItemsForm.setValue("itemIds", []);
                }}
              >
                선택 해제 {selectedItemIds.length}
              </button>
            ) : (
              <button
                type="button"
                className="text-gray-700 text-body-6"
                onClick={() => {
                  groupItemsForm.setValue(
                    "itemIds",
                    items.map((item) => item.itemId)
                  );
                }}
              >
                전체 선택
              </button>
            )}
          </div>
        </div>
        <div className="mt-3">
          {items.map((item) => (
            <div
              key={item.itemId}
              className="flex items-center gap-3 py-2 px-4.5"
            >
              <Image
                unoptimized
                width={74}
                height={74}
                src={
                  item.imageUrls[0] ||
                  "https://placehold.co/100x100/white/white"
                }
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/100x100/white/white";
                }}
                alt={item.itemName}
                className="rounded-sm"
              />
              <div className="flex-1 mt-3">
                <div className="flex">
                  <span className="text-gray-600 text-body-6 line-clamp-1">
                    {item.itemName}
                  </span>
                  <span className="text-primary text-body-6 ml-1.5 font-semibold">
                    {getItemStatusText(item.status)}
                  </span>
                </div>
                <p className="text-body-1 mt-1.5 line-clamp-2">
                  {item.itemName}
                </p>
              </div>
              <div className="flex items-center">
                <Label htmlFor={`item-${item.itemId}`} className="sr-only">
                  {item.itemName} 선택
                </Label>
                <Checkbox
                  id={`item-${item.itemId}`}
                  name={`item-${item.itemId}`}
                  value={item.itemId}
                  checked={selectedItemIds.includes(item.itemId)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? groupItemsForm.setValue("itemIds", [
                          ...selectedItemIds,
                          item.itemId,
                        ])
                      : groupItemsForm.setValue(
                          "itemIds",
                          selectedItemIds.filter((id) => id !== item.itemId)
                        );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
