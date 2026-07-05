"use client";

import { useMemo } from "react";
import { Video } from "@/types/video";
import { getContinueWatching } from "@/utils/continueWatching";
import { VideoCard } from "@/components/VideoCard";

import * as S from "./styles";

type Props = {
  videos: Video[];
};

export function ContinueWatching({ videos }: Props) {
  const continueVideos = useMemo(() => {
    const progressItems = getContinueWatching();

    return progressItems
      .map((item) => {
        const video = videos.find((video) => video.id === item.videoId);

        if (!video) return null;

        return video;
      })
      .filter(Boolean) as Video[];
  }, [videos]);

  if (continueVideos.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.Header>
        <S.Title>▶ Continue assistindo</S.Title>
        <S.Subtitle>Volte exatamente de onde parou.</S.Subtitle>
      </S.Header>

      <S.Grid>
        {continueVideos.slice(0, 4).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </S.Grid>
    </S.Section>
  );
}