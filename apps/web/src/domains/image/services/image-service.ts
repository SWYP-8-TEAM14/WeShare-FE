import { ImageRepository } from "@/domains/image/repositories/image-repository";

export class ImageService {
  static async uploadImage(files: File[]) {
    return ImageRepository.uploadImage(files).then((response) => {
      return response;
    });
  }
}
