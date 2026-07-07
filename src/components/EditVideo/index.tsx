"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getVideoById, updateVideo } from "@/services/videos";
import { uploadImageToBunny, uploadVideoToBunny } from "@/services/bunny";

import * as S from "./styles";

type Props = {
  videoId: string;
};

export function EditVideo({ videoId }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [published, setPublished] = useState(true);

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    async function loadVideo() {
      try {
        const video = await getVideoById(videoId);

        if (!video) {
          alert("Vídeo não encontrado.");
          router.push("/admin/videos");
          return;
        }

        setTitle(video.title);
        setDescription(video.description);
        setTags((video.tags ?? []).join(", "));
        setThumbnail(video.thumbnail ?? "");
        setVideoUrl(video.videoUrl ?? "");
        setPublished(video.published ?? true);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar vídeo.");
      } finally {
        setIsLoading(false);
      }
    }

    loadVideo();
  }, [videoId, router]);

  async function handleSave() {
    if (!title || !description || !videoUrl) {
      alert("Preencha título, descrição e vídeo.");
      return;
    }

    try {
      setIsSaving(true);
      setUploadProgress(0);

      let finalVideoUrl = videoUrl;
      let finalThumbnail = thumbnail;

      if (videoFile) {
        const uploadedVideo = await uploadVideoToBunny(
          videoFile,
          title,
          setUploadProgress
        );

        finalVideoUrl = uploadedVideo.videoUrl;
        finalThumbnail = uploadedVideo.thumbnailUrl;
      }

      if (thumbnailFile) {
        finalThumbnail = await uploadImageToBunny(thumbnailFile);
      }

      await updateVideo(videoId, {
        title,
        description,
        videoUrl: finalVideoUrl,
        thumbnail: finalThumbnail || "",
        published,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      });

      alert("Vídeo atualizado com sucesso.");
      router.push("/admin/videos");
    } catch (error) {
      console.log(error);
      alert("Erro ao salvar alterações.");
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <S.Container>
        <S.Content>
          <S.Description>Carregando vídeo...</S.Description>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.BackButton href="/admin/videos">← Voltar aos vídeos</S.BackButton>

        <S.Title>Editar Vídeo</S.Title>

        <S.Description>
          Altere os dados do vídeo e salve as mudanças.
        </S.Description>

        <S.Form>
          <S.Input
            placeholder="Título do vídeo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <S.Input
            placeholder="Tags separadas por vírgula"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />

          <S.TextArea
            placeholder="Descrição do vídeo"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          {thumbnail && (
            <S.Preview>
              <S.PreviewImage src={thumbnail} alt={title} />
            </S.Preview>
          )}

          <S.Label>
            Trocar thumbnail
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={(event) =>
                setThumbnailFile(event.target.files?.[0] ?? null)
              }
            />
          </S.Label>

          <S.Label>
            Trocar vídeo
            <S.FileInput
              type="file"
              accept="video/*"
              onChange={(event) =>
                setVideoFile(event.target.files?.[0] ?? null)
              }
            />
          </S.Label>

          <S.CheckboxLabel>
            <input
              type="checkbox"
              checked={published}
              onChange={(event) => setPublished(event.target.checked)}
            />
            Publicado
          </S.CheckboxLabel>

          {isSaving && videoFile && (
            <S.UploadCard>
              <S.UploadTitle>
                {uploadProgress < 100
                  ? "Enviando novo vídeo..."
                  : "Finalizando atualização..."}
              </S.UploadTitle>

              <S.ProgressBar>
                <S.Progress $progress={uploadProgress} />
              </S.ProgressBar>

              <S.ProgressValue>{uploadProgress.toFixed(0)}%</S.ProgressValue>
            </S.UploadCard>
          )}

          <S.SaveButton type="button" onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Salvando..." : "Salvar alterações"}
          </S.SaveButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}