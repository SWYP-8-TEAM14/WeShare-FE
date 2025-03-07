"use client";
import ImageInput from "@/components/image-input";
import { useCreateGroup } from "@/domains/group/hooks/use-create-group";
import { useGroupForm } from "@/domains/group/hooks/use-group-form";
import useFilePreview from "@/hooks/use-file-preview";
import { EditIcon } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { FixedBottom, FixedBottomActions } from "@repo/ui/fixed-bottom";
import { ErrorMessage } from "@repo/ui/form";
import { TextField } from "@repo/ui/text-field";
import { Textarea } from "@repo/ui/textarea";
import { useToast } from "@repo/ui/use-toast";
import { useRouter } from "next/navigation";
import { useId } from "react";
import { Controller } from "react-hook-form";

export default function CreateGroupForm() {
  const { toast } = useToast();
  const router = useRouter();
  const id = useId();
  const createGroup = useCreateGroup();
  const groupForm = useGroupForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const imagePreview = useFilePreview(groupForm.watch("image"));
  const onSubmit = groupForm.handleSubmit((data) => {
    const file = data.image;
    if (!file) {
      return;
    }
    createGroup.mutate(
      {
        image: file,
        name: data.name,
        description: data.description,
      },
      {
        onSuccess: () => {
          groupForm.reset();
          toast({ title: "그룹이 생성되었습니다." });
          router.push("/app/groups");
        },
      }
    );
  });

  return (
    <>
      <form className="flex-1 bg-white" id={`form-${id}`} onSubmit={onSubmit}>
        {/* 그룹 이미지 입력 */}
        <div className="py-6.5 flex justify-center flex-col items-center gap-4">
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
          <ErrorMessage>
            {groupForm.formState.errors.image?.message}
          </ErrorMessage>
        </div>
        {/* 그룹 정보 입력 */}
        <div className="py-6.5 px-4.5 flex flex-col gap-7.5">
          <TextField
            maxLength={20}
            label="그룹이름"
            placeholder="그룹 이름을 입력해주세요"
            {...groupForm.register("name")}
            errorMessage={groupForm.formState.errors.name?.message}
          />
          <Textarea
            label="그룹 소개"
            placeholder="그룹 소개를 입력해주세요"
            maxLength={100}
            {...groupForm.register("description")}
            errorMessage={groupForm.formState.errors.description?.message}
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
