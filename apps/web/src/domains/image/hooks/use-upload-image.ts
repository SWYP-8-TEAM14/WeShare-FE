import { ImageService } from "@/domains/image/services/image-service";
import { useMutation } from "@tanstack/react-query";

export const useUploadImage = () => {
  return useMutation({
    mutationFn: ({ files }: { files: File[] }) => {
      return ImageService.uploadImage(files);
    },
  });
};
