"use client";

import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import * as S from "./styles";

type Props = {
  videos: Video[];
};

export function TrendingVideos({ videos }: Props) {
  const trending = [...videos]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 4);

  if (trending.length === 0) return null;

  return (
    <S.Section>
      <S.Header>
        <S.Title>🔥 Em alta</S.Title>
        <S.Subtitle>Os vídeos mais assistidos agora.</S.Subtitle>
      </S.Header>

      <S.Grid>
        {trending.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </S.Grid>
    </S.Section>
  );
}