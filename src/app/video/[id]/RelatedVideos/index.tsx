"use client";

import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import * as S from "./styles";

type Props = {
  currentVideo: Video;
  videos: Video[];
};

export function RelatedVideos({ currentVideo, videos }: Props) {
  const relatedVideos = videos
    .filter((video) => video.id !== currentVideo.id)
    .filter((video) =>
      video.tags.some((tag) => currentVideo.tags.includes(tag))
    )
    .slice(0, 10);

  if (relatedVideos.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <S.Title>Vídeos relacionados</S.Title>

      <S.Grid>
        {relatedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </S.Grid>
    </S.Container>
  );
}