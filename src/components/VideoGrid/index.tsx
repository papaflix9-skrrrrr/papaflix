"use client";
import React from "react";
import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import { AdCard } from "@/components/AdCard";
import * as S from "./styles";

type Props = {
  videos: Video[];
  showInlineAds?: boolean;
};

export function VideoGrid({ videos, showInlineAds = false }: Props) {
  return (
    <S.Container>
      {videos.map((video, index) => (
  <React.Fragment key={video.id}>
    <VideoCard video={video} />

    {showInlineAds && (index + 1) % 4 === 0 && (
      <AdCard />
    )}
  </React.Fragment>
))}
    </S.Container>
  );
}