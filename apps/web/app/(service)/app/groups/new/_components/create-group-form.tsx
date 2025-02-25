"use client";
import { useCreateGroup } from "@/domains/group/hooks/use-create-group";
import { useGroupForm } from "@/domains/group/hooks/use-group-form";
import useFilePreview from "@/hooks/use-file-preview";
import { EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import React, { forwardRef, useId } from "react";
import { Controller } from "react-hook-form";

export default function CreateGroupForm() {
  const id = useId();
  const createGroup = useCreateGroup();
  const groupForm = useGroupForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const imagePreview = useFilePreview(groupForm.watch("image")?.[0]);
  const onSubmit = groupForm.handleSubmit((data) => {
    console.log(`onSubmit: ${JSON.stringify(data)}`);
    // createGroup.mutate(data, {
    //   onSuccess: () => {
    //     router.push("/app/groups");
    //   },
    // });
  });

  return (
    <>
      <form className="flex-1 bg-white" id={`form-${id}`} onSubmit={onSubmit}>
        {/* 그룹 이미지 입력 */}
        <div className="py-6.5 flex justify-center">
          <label className="relative inline-flex">
            <span className="sr-only">그룹 이미지</span>
            <img
              className="w-18.5 h-18.5 rounded-sm"
              src={imagePreview || "https://placehold.co/74"}
              alt="그룹 이미지"
            />
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center absolute -right-1 -bottom-1 text-white">
              <EditIcon className="size-5.5" />
            </div>
            <Controller
              name="image"
              control={groupForm.control}
              render={({ field: { onChange, ...fields } }) => (
                <ImageInput multiple onChange={onChange} {...fields} />
              )}
            />
          </label>
        </div>
        {/* 그룹 정보 입력 */}
        <div className="py-6.5 px-4.5 flex flex-col gap-7.5">
          <TextField
            maxLength={20}
            label="그룹 이름"
            placeholder="그룹 이름을 입력해주세요"
            {...groupForm.register("name")}
          />
          <Textarea
            label="그룹 소개"
            placeholder="그룹 소개를 입력해주세요"
            maxLength={100}
            {...groupForm.register("description")}
          />
        </div>
      </form>
      <FixedBottom>
        <FixedBottomActions>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="secondary"
            form={`form-${id}`}
          >
            그룹 생성하기
          </Button>
        </FixedBottomActions>
      </FixedBottom>
    </>
  );
}

type ImageInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "value" | "onChange"
> & {
  onChange: (files: File[]) => void;
};

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ onChange, ...props }, ref) => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        onChange(Array.from(files));
      }
    };

    return (
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={onChangeInput}
        {...props}
        value={undefined} // Prevent controlled input warning
      />
    );
  }
);
