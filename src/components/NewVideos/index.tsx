"use client";

import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";

import * as S from "./styles";

type Props = {
  videos: Video[];
};

export function NewVideos({ videos }: Props) {
 const newest = [...videos]
  .sort((a, b) => {
    const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return bTime - aTime;
  })
  .slice(0, 4);

  if (!newest.length) return null;

  return (
    <S.Section>
      <S.Header>
        <S.Title>🆕 Recém adicionados</S.Title>
        <S.Subtitle>
          Os vídeos publicados mais recentemente.
        </S.Subtitle>
      </S.Header>

      <S.Grid>
        {newest.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </S.Grid>
    </S.Section>
  );
}