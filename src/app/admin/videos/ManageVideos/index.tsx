"use client";

import { useEffect, useState } from "react";

import { getVideos, deleteVideo } from "@/services/videos";
import { Video } from "@/types/video";

import * as S from "./styles";

export function ManageVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadVideos() {
    try {
      const firestoreVideos = await getVideos();

      setVideos(firestoreVideos as Video[]);
    } catch (error) {
      console.log(error);
      alert("Erro ao carregar vídeos.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(videoId: string) {
    const confirmDelete = confirm("Tem certeza que deseja excluir este vídeo?");

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteVideo(videoId);

      setVideos((currentVideos) =>
        currentVideos.filter((video) => video.id !== videoId)
      );

      alert("Vídeo excluído com sucesso.");
    } catch (error) {
      console.log(error);
      alert("Erro ao excluir vídeo.");
    }
  }

  useEffect(() => {
    loadVideos();
  }, []);

  if (isLoading) {
    return (
      <S.Container>
        <S.Content>
          <S.Description>Carregando vídeos...</S.Description>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.BackButton href="/profile">← Voltar ao perfil</S.BackButton>

        <S.Title>Gerenciar Vídeos</S.Title>

        <S.Description>Edite ou exclua vídeos publicados.</S.Description>

        <S.List>
          {videos.map((video) => (
            <S.Card key={video.id}>
              {video.thumbnail ? (
                <S.Thumbnail src={video.thumbnail} alt={video.title} />
              ) : (
                <S.ThumbnailPlaceholder>Sem thumbnail</S.ThumbnailPlaceholder>
              )}

              <S.Info>
                <S.VideoTitle>{video.title}</S.VideoTitle>

                <S.Views>
                  {(video.views ?? 0).toLocaleString("pt-BR")} visualizações
                </S.Views>
              </S.Info>

              <S.Actions>
               
                <S.DeleteButton
                  type="button"
                  onClick={() => handleDelete(video.id)}
                >
                  Excluir
                </S.DeleteButton>
              </S.Actions>
            </S.Card>
          ))}
        </S.List>
      </S.Content>
    </S.Container>
  );
}