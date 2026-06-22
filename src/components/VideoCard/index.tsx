"use client";

import { Video } from "@/types/video";
import * as S from "./styles";
import Link from "next/link";

type Props = {
  video: Video;
};

export function VideoCard({ video }: Props) {
  return (
      <Link href={`/video/${video.id}`}>
    <S.Container>
      <S.ThumbnailWrapper>
        <S.Thumbnail src={video.thumbnail} alt={video.title} />
        <S.Duration>{video.duration}</S.Duration>
      </S.ThumbnailWrapper>

      <S.Title>{video.title}</S.Title>

     <S.Meta>{(video.views ?? 0).toLocaleString("pt-BR")} visualizações</S.Meta>

      <S.Tags>
       {(video.tags ?? []).map((tag) => (
          <S.Tag key={tag}>#{tag}</S.Tag>
        ))}
      </S.Tags>
    </S.Container>
      </Link>
  );
}