"use client";
import ImageInput from "@/components/image-input";
import { useUpdateGroup } from "@/domains/group/hooks/use-update-group";
import { useUpdateGroupForm } from "@/domains/group/hooks/use-update-group-form";
import useFilePreview from "@/hooks/use-file-preview";
import useFormId from "@/hooks/use-form-id";
import { EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import { Controller } from "react-hook-form";

export default function GroupInfoForm() {
  const formId = useFormId();
  const updateGroup = useUpdateGroup();
  const updateGroupForm = useUpdateGroupForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const imagePreview = useFilePreview(updateGroupForm.watch("image")?.[0]);

  const onSubmit = updateGroupForm.handleSubmit((data) => {
    console.log(`onSubmit: ${JSON.stringify(data)}`);
  });

  return (
    <>
      <form className="flex-1 bg-white" id={formId} onSubmit={onSubmit}>
        {/* 그룹 이미지 입력 */}
        <div className="py-6.5 flex flex-col items-center">
          <label className="relative inline-flex">
            <span className="sr-only">그룹 이미지</span>
            <img
              className="w-18.5 h-18.5 rounded-sm"
              src="https://placehold.co/74"
              alt="그룹 이미지"
            />
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center absolute -right-1 -bottom-1 text-white">
              <EditIcon className="size-5.5" />
            </div>
            <Controller
              name="image"
              control={updateGroupForm.control}
              render={({ field: { onChange, ...fields } }) => (
                <ImageInput multiple onChange={onChange} {...fields} />
              )}
            />
          </label>
          <p className="mt-3 text-heading-2">그룹 이름</p>
          <p className="text-body-4 text-gray-600 mt-1.5">멤버수 10</p>
        </div>
        {/* 그룹 정보 입력 */}
        <div className="py-6.5 px-4.5 flex flex-col gap-7.5">
          <TextField
            maxLength={20}
            label="그룹이름"
            placeholder="그룹 이름을 입력해주세요"
            {...updateGroupForm.register("name")}
          />
          <Textarea
            label="그룹 소개"
            placeholder="그룹 소개를 입력해주세요"
            maxLength={100}
            {...updateGroupForm.register("description")}
          />
        </div>
      </form>
      <FixedBottom>
        <FixedBottomActions>
          <Button fullWidth size="large" variant="secondary" form={formId}>
            저장하기
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </>
  );
}
