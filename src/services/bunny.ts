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

export async function uploadVideoToBunny(file: File, title: string) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("title", title);

  const response = await fetch("/api/upload-video", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Erro upload Bunny vídeo:", data);
    throw new Error(data.error || "Erro ao enviar vídeo.");
  }

  return data.videoUrl as string;
}