"use client";

import { useMemo } from "react";

import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import { getSavedVideos } from "@/utils/savedVideos";

import * as S from "./styles";

type Props = {
  videos: Video[];
};

export function FavoriteVideos({ videos }: Props) {
  const favoriteVideos = useMemo(() => {
    const savedIds = getSavedVideos();

    return savedIds
      .map((id) => videos.find((video) => video.id === id))
      .filter(Boolean) as Video[];
  }, [videos]);

  if (favoriteVideos.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.Header>
        <S.Title>❤️ Favoritos</S.Title>
        <S.Subtitle>Seus vídeos salvos para assistir depois.</S.Subtitle>
      </S.Header>

      <S.Grid>
        {favoriteVideos.slice(0, 4).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </S.Grid>
    </S.Section>
  );
}