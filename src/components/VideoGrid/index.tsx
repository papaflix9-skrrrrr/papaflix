"use client";

import React from "react";
import { Video } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import { AdCard } from "@/components/AdCard";
import * as S from "./styles";

type Props = {
  videos: Video[];
  showInlineAds?: boolean;
  isLoading?: boolean;
};

export function VideoGrid({
  videos,
  showInlineAds = false,
  isLoading = false,
}: Props) {
  if (isLoading) {
    return (
      <S.Container>
        {Array.from({ length: 8 }).map((_, index) => (
          <S.SkeletonCard key={index}>
            <S.SkeletonThumb />
            <S.SkeletonLine />
            <S.SkeletonSmallLine />
          </S.SkeletonCard>
        ))}
      </S.Container>
    );
  }

  return (
    <S.Container>
      {videos.map((video, index) => (
        <React.Fragment key={video.id}>
          <VideoCard video={video} />

          {showInlineAds && (index + 1) % 4 === 0 && <AdCard />}
        </React.Fragment>
      ))}
    </S.Container>
  );
}