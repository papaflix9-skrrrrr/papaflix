"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createVideo } from "@/services/videos";
import { uploadImageToBunny, uploadVideoToBunny } from "@/services/bunny";

import * as S from "./styles";

export function CreateVideo() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const [isPublishing, setIsPublishing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  async function handlePublish() {
    if (!title || !description || !videoFile) {
      alert("Preencha título, descrição e selecione um vídeo.");
      return;
    }

    try {
      setIsPublishing(true);
      setUploadProgress(0);

      const uploadedVideo = await uploadVideoToBunny(
        videoFile,
        title,
        setUploadProgress
      );

      let thumbnailUrl = "";

      if (thumbnailFile) {
        thumbnailUrl = await uploadImageToBunny(thumbnailFile);
      }

      await createVideo({
        title,
        description,
        videoUrl: uploadedVideo.videoUrl,
        thumbnail: thumbnailUrl || uploadedVideo.thumbnailUrl || "",
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      });

      alert("Vídeo publicado com sucesso!");
      router.push("/");
    } catch (error) {
      console.error("Erro ao publicar vídeo:", error);
      alert("Erro ao publicar vídeo. Veja o Console.");
    } finally {
      setIsPublishing(false);
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.BackButton href="/profile">← Voltar ao perfil</S.BackButton>

        <S.Title>Novo Vídeo</S.Title>

        <S.Description>
          Preencha os dados para publicar um vídeo na plataforma.
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

          <S.Label>
            Vídeo obrigatório
            <S.FileInput
              type="file"
              accept="video/*"
              onChange={(event) =>
                setVideoFile(event.target.files?.[0] ?? null)
              }
            />
          </S.Label>

          <S.Label>
            Thumbnail opcional
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={(event) =>
                setThumbnailFile(event.target.files?.[0] ?? null)
              }
            />
          </S.Label>

          {isPublishing && (
            <S.UploadCard>
              <S.UploadTitle>
                {uploadProgress < 100
                  ? "Enviando vídeo..."
                  : "Finalizando publicação..."}
              </S.UploadTitle>

              <S.UploadText>
                {uploadProgress < 100
                  ? "Seu vídeo está sendo enviado para o Bunny Stream."
                  : "Aguarde enquanto concluímos a publicação."}
              </S.UploadText>

              <S.ProgressBar>
                <S.Progress $progress={uploadProgress} />
              </S.ProgressBar>

              <S.ProgressValue>{uploadProgress.toFixed(0)}%</S.ProgressValue>
            </S.UploadCard>
          )}

          <S.PublishButton
            type="button"
            onClick={handlePublish}
            disabled={isPublishing}
          >
            {isPublishing ? "Publicando..." : "Publicar Vídeo"}
          </S.PublishButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}