"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Video } from "@/types/video";
import { getProgress } from "@/utils/continueWatching";

import * as S from "./styles";

type Props = {
  video: Video;
};



export function VideoCard({ video }: Props) {
  const progress = useMemo(() => getProgress(video.id), [video.id]);
const [isHovered, setIsHovered] = useState(false);
  const progressPercentage =
    progress?.duration > 0
      ? Math.min((progress.currentTime / progress.duration) * 100, 100)
      : 0;

  return (
    <Link href={`/video/${video.id}`}>
      <S.Container>
      <S.ThumbnailWrapper  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
  {isHovered ? (
  <S.PreviewIframe
    src={`${video.videoUrl}?autoplay=true&muted=true`}
    allow="autoplay"
  />
) : video.thumbnail ? (
  <S.Thumbnail
    src={video.thumbnail}
    alt={video.title}
  />
) : (
  <S.ThumbnailPlaceholder>▶</S.ThumbnailPlaceholder>
)}

  <S.HoverOverlay>
    <S.PlayIcon>▶</S.PlayIcon>
  </S.HoverOverlay>

  {video.duration && <S.Duration>{video.duration}</S.Duration>}

  {progressPercentage > 3 && (
    <S.ProgressBar>
      <S.Progress $progress={progressPercentage} />
    </S.ProgressBar>
  )}
</S.ThumbnailWrapper>
        <S.Title>{video.title}</S.Title>

        <S.Meta>
          {(video.views ?? 0).toLocaleString("pt-BR")} visualizações
        </S.Meta>

        <S.Tags>
          {(video.tags ?? []).slice(0, 3).map((tag) => (
            <S.Tag key={tag}>#{tag}</S.Tag>
          ))}
        </S.Tags>
      </S.Container>
    </Link>
  );
}