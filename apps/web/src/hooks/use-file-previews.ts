"use client";
import * as React from "react";

export default function useFilePreviews({
  files,
}: {
  files: File[] | null | undefined;
}) {
  const [previews, setPreviews] = React.useState<Map<string, string>>(
    new Map()
  );

  React.useEffect(() => {
    if (!files || files.length === 0) {
      previews.forEach((url) => URL.revokeObjectURL(url));
      setPreviews(new Map());
      return;
    }

    const newPreviews = new Map<string, string>();

    files.forEach((file) => {
      const fileKey = `${file.name}-${file.lastModified}`;
      const existingUrl = previews.get(fileKey);
      if (existingUrl) {
        newPreviews.set(fileKey, existingUrl);
      } else {
        newPreviews.set(fileKey, URL.createObjectURL(file));
      }
    });

    previews.forEach((url, key) => {
      if (!newPreviews.has(key)) {
        URL.revokeObjectURL(url);
      }
    });

    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const previewUrls = Array.from(previews.values());

  return previewUrls;
}
