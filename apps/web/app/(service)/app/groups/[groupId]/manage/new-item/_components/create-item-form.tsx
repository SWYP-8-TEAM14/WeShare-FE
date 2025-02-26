"use client";
import { useCreateItem } from "@/domains/item/hooks/use-create-item";
import { useItemForm } from "@/domains/item/hooks/use-item-form";
import useFilePreviews from "@/hooks/use-file-previews";
import { AddPhotoslotIcon, DeletePhotoslotIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import Image from "next/image";
import { useId } from "react";
import { Controller } from "react-hook-form";

export default function CreateItemForm() {
  const id = useId();
  const createItem = useCreateItem();
  const itemForm = useItemForm({
    defaultValues: {
      images: [],
    },
  });
  const imagesPreview = useFilePreviews({
    files: itemForm.watch("images"),
  });

  const onSubmit = itemForm.handleSubmit((data) => {
    console.log(`onSubmit: ${JSON.stringify(data)}`);
  });

  return (
    <>
      <form className="flex-1 bg-white" id={`form-${id}`} onSubmit={onSubmit}>
        {/* 사진 업로드 */}
        <div className="pt-6.5 pb-2 px-4.5 flex flex-col">
          <div>
            <span className="text-heading-5">사진 등록</span>
            <p className="text-body-5 text-gray-600">
              공용물품 사진을 최대 4개 등록해 주세요.
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            {itemForm.getValues("images").length < 4 && (
              <label className="pt-2.5 w-20 h-20 flex flex-col items-center border border-black/10 rounded-sm">
                <AddPhotoslotIcon className="size-4.5 text-gray-500" />
                <span className="text-body-6 mt-1.5">사진 업로드</span>
                <span className="text-detail-3 text-gray-700 mt-0.5">
                  ({imagesPreview.length} / 4)
                </span>
                <Controller
                  name="images"
                  control={itemForm.control}
                  render={({ field: { onChange, value, ...fields } }) => (
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        // 최대 4개까지만 업로드 가능 4개 미만일 때는 선택한 파일을 기존의 파일 뒤에 추가
                        const files = e.target.files;
                        if (!files?.length) return;
                        const prevImages = value;
                        const newImages = Array.from(files).slice(
                          0,
                          4 - prevImages.length
                        );
                        onChange([...prevImages, ...newImages]);
                      }}
                      {...fields}
                    />
                  )}
                />
              </label>
            )}
            {/* 업로드된 사진 미리보기 */}
            {imagesPreview?.map((preview, index) => (
              <div key={preview} className="w-20 h-20 relative">
                <Image
                  src={preview}
                  alt="사진 미리보기"
                  width={80}
                  height={80}
                  className="rounded-sm aspect-square object-cover"
                />
                <button
                  type="button"
                  className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center bg-white"
                  onClick={() => {
                    const newImages = itemForm
                      .getValues("images")
                      .filter((_, i) => i !== index);
                    itemForm.setValue("images", newImages);
                  }}
                >
                  <span className="sr-only">사진 삭제</span>
                  <DeletePhotoslotIcon className="size-4.5 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 정보 입력 */}
        <div className="pt-6.5 pb-7.5 px-4.5 flex flex-col gap-7.5">
          <TextField
            label="물품 이름"
            placeholder="물품 이름을 작성해 주세요."
            {...itemForm.register("name")}
          />
          <TextField
            className="text-right"
            type="number"
            label="물품 수량"
            placeholder="0"
            min={1}
            max={999}
            step={1}
            endContent={<span className="text-body-2 text-gray-700">개</span>}
            {...itemForm.register("quantity")}
          />
          <Textarea
            label="상세 내용"
            maxLength={100}
            placeholder="물품에 대한 설명을 작성해 주세요."
            {...itemForm.register("description")}
          />
        </div>
        <hr className="h-2 bg-gray-100 border-none" />
        {/* 장소 입력 */}
        <div className="py-7.5 px-4.5 flex flex-col gap-7.5">
          <TextField
            label="픽업 장소"
            placeholder="픽업 장소를 작성해 주세요."
            {...itemForm.register("pickupLocation")}
          />
          <TextField
            label="반납 장소"
            placeholder="반납 장소를 작성해 주세요."
            {...itemForm.register("returnLocation")}
          />
        </div>
        {/* 기타사항 입력 */}
        <div className="pt-7.5 pb-6.5 px-4.5">
          <Textarea
            label="대여시 주의사항"
            maxLength={100}
            placeholder="대여시 주의사항을 작성해 주세요."
            {...itemForm.register("caution")}
          />
        </div>
      </form>
      <FixedBottom>
        <FixedBottomActions>
          <Button
            type="submit"
            variant="secondary"
            size="large"
            form={`form-${id}`}
          >
            물품 추가
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </>
  );
}
