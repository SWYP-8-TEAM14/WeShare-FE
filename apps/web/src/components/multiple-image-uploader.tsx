"use client";
import useFilePreviews from "@/hooks/use-file-previews";
import { AddPhotoslotIcon, DeletePhotoslotIcon } from "@repo/icons";
import Image from "next/image";

interface MultipleImageUploaderProps {
  onImageChange: (files: File[]) => void;
  images: File[];
  maxImages: number;
}

export default function MultipleImageUploader({
  maxImages = 4,
  onImageChange,
  images,
}: MultipleImageUploaderProps) {
  const imagesPreview = useFilePreviews({
    files: images,
  });

  return (
    <div className="flex overflow-y-auto">
      <div className=" flex gap-2 py-2">
        {images.length < maxImages && (
          <label className="pt-2.5 w-20 h-20 flex flex-col items-center border border-black/10 rounded-sm">
            <AddPhotoslotIcon className="size-4.5 text-gray-500" />
            <span className="text-body-6 mt-1.5">사진 업로드</span>
            <span className="text-detail-3 text-gray-700 mt-0.5">
              ({images.length} / {maxImages})
            </span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (!files?.length) return;
                const prevImages = images;
                const newImages = Array.from(files).slice(
                  0,
                  maxImages - prevImages.length
                );
                onImageChange([...prevImages, ...newImages]);
              }}
            />
          </label>
        )}
        {/* 업로드된 사진 미리보기 */}
        {imagesPreview?.map((preview, index) => (
          <div
            key={preview}
            className="w-20 h-20 relative border border-black/10 rounded-sm"
          >
            <Image
              unoptimized
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
                const newImages = images.filter((_, i) => i !== index);
                onImageChange(newImages);
              }}
            >
              <span className="sr-only">사진 삭제</span>
              <DeletePhotoslotIcon className="size-4.5 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
