"use client";
import RouterBackButton from "@/components/router-back-button";
import { useBatchUpdateGroupItems } from "@/domains/group/hooks/use-batch-update-group-items";
import { useGroupItemsForm } from "@/domains/group/hooks/use-group-items-form";
import { itemsOfGroup } from "@/domains/item/mocks";
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
  const batchDeleteItems = useBatchUpdateGroupItems();
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
            <GroupItemsDeleteButton itemIds={selectedItemIds} />
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
                    itemsOfGroup.map((item) => item.id)
                  );
                }}
              >
                전체 선택
              </button>
            )}
          </div>
        </div>
        <div className="mt-3">
          {itemsOfGroup.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-2 px-4.5">
              <Image
                unoptimized
                width={74}
                height={74}
                src={item.image}
                alt={item.itemName}
                className="rounded-sm"
              />
              <div className="flex-1 mt-3">
                <div className="flex">
                  <span className="text-gray-600 text-body-6 line-clamp-1">
                    {item.groupName}
                  </span>
                  <span className="text-primary text-body-6 ml-1.5 font-semibold">
                    {item.itemStatus}
                  </span>
                </div>
                <p className="text-body-1 mt-1.5 line-clamp-2">
                  {item.itemName}
                </p>
              </div>
              <div className="flex items-center">
                <Label htmlFor={`item-${item.id}`} className="sr-only">
                  {item.itemName} 선택
                </Label>
                <Checkbox
                  id={`item-${item.id}`}
                  name={`item-${item.id}`}
                  value={item.id}
                  checked={selectedItemIds.includes(item.id)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? groupItemsForm.setValue("itemIds", [
                          ...selectedItemIds,
                          item.id,
                        ])
                      : groupItemsForm.setValue(
                          "itemIds",
                          selectedItemIds.filter((id) => id !== item.id)
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
