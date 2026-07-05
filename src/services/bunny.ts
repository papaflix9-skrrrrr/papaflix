import * as tus from "tus-js-client";

type BunnyTusResponse = {
  videoId: string;
  libraryId: string;
  expirationTime: number;
  signature: string;
  videoUrl: string;
  thumbnailUrl: string;
};

type UploadVideoResult = {
  videoUrl: string;
  thumbnailUrl: string;
};

export async function uploadImageToBunny(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch("/api/upload-image", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Erro upload Bunny imagem:", data);
    throw new Error(data.error || "Erro ao enviar imagem.");
  }

  return data.url as string;
}

export async function uploadVideoToBunny(
  file: File,
  title: string,
  onProgress?: (percentage: number) => void
): Promise<UploadVideoResult> {
  const response = await fetch("/api/upload-video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  const data = (await response.json()) as BunnyTusResponse & {
    error?: string;
  };

  if (!response.ok) {
    console.error("Erro credenciais Bunny vídeo:", data);
    throw new Error(data.error || "Erro ao preparar upload do vídeo.");
  }

  await new Promise<void>((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: "https://video.bunnycdn.com/tusupload",
      retryDelays: [0, 3000, 5000, 10000, 20000, 60000],
      headers: {
        AuthorizationSignature: data.signature,
        AuthorizationExpire: String(data.expirationTime),
        VideoId: data.videoId,
        LibraryId: String(data.libraryId),
      },
      metadata: {
        filetype: file.type || "video/mp4",
        title: title || file.name,
      },
      onError(error) {
        console.error("Erro TUS Bunny:", error);
        reject(error);
      },
      onProgress(bytesUploaded, bytesTotal) {
        const percentage = (bytesUploaded / bytesTotal) * 100;
        onProgress?.(percentage);
      },
      onSuccess() {
        resolve();
      },
    });

    upload.findPreviousUploads().then((previousUploads) => {
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }

      upload.start();
    });
  });

  return {
    videoUrl: data.videoUrl,
    thumbnailUrl: data.thumbnailUrl,
  };
}