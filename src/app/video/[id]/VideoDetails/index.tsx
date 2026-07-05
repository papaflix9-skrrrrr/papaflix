"use client";

import { Video } from "@/types/video";
import { saveVideo } from "@/utils/savedVideos";
import { RelatedVideos } from "../RelatedVideos";
import * as S from "./styles";
import { useEffect, useState, useRef} from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL } from "@/config/admin";
import { listenAuthState } from "@/services/auth";
import { deleteVideo } from "@/services/videos";
import { incrementVideoViews } from "@/services/videos";
import { HorizontalBanner } from "@/components/Ads/HorizontalBanner";
import { VideoPreroll } from "@/components/Ads/VideoPreroll";


import {
  getProgress,
  removeProgress,
  saveProgress,
} from "@/utils/continueWatching";


type Props = {
  video: Video;
  videos: Video[];
};

export function VideoDetails({ video, videos }: Props) {
  async function handleSave() {
  const unsubscribe = listenAuthState((user) => {
    unsubscribe();

    if (!user) {
      alert("Entre na sua conta para salvar vídeos.");
      router.push("/login");
      return;
    }

    saveVideo(video.id);
    alert("Vídeo salvo!");
  });
}

  const router = useRouter();
const [isAdmin, setIsAdmin] = useState(false);
const [views, setViews] = useState(video.views ?? 0);
const [hasStarted, setHasStarted] = useState(false);
const iframeRef = useRef<HTMLIFrameElement | null>(null);
const [isPrerollFinished, setIsPrerollFinished] = useState(false);

useEffect(() => {
  const unsubscribe = listenAuthState((user) => {
    const admin =
      user?.email?.toLowerCase().trim() ===
      ADMIN_EMAIL.toLowerCase().trim();

    setIsAdmin(admin);
  });

  return () => unsubscribe();
}, []);

useEffect(() => {
  incrementVideoViews(video.id);
  setViews((current) => current + 1);
}, [video.id]);

async function handleDelete() {
  const confirmDelete = confirm("Tem certeza que deseja excluir este vídeo?");

  if (!confirmDelete) return;

  await deleteVideo(video.id);

  alert("Vídeo excluído.");
  router.push("/");
}

useEffect(() => {
  if (!hasStarted || !iframeRef.current) return;

  const playerjs = window.playerjs;

  if (!playerjs) return;

  const player = new playerjs.Player(iframeRef.current);

  player.on("ready", () => {
    const saved = getProgress(video.id);

    if (saved?.currentTime && saved.currentTime > 5) {
      player.setCurrentTime(saved.currentTime);
    }

    player.on("timeupdate", (data: { seconds: number; duration: number }) => {
      if (!data?.duration) return;

      const percentage = data.seconds / data.duration;

      if (percentage >= 0.95) {
        removeProgress(video.id);
        return;
      }

      saveProgress(video.id, data.seconds, data.duration);
    });

    player.on("ended", () => {
      removeProgress(video.id);
    });
  });
}, [hasStarted, video.id]);

async function handleShare() {
  const url = window.location.href;

  if (navigator.share) {
    await navigator.share({
      title: video.title,
      text: video.description,
      url,
    });

    return;
  }

  await navigator.clipboard.writeText(url);
  alert("Link copiado!");
}

  return (
    <S.Container>
      <S.BackButton href="/">← Voltar</S.BackButton>

      <S.AdTop>Espaço para anúncio</S.AdTop>

      <S.ContentLayout>
        <S.MainColumn>
       <S.PlayerArea>
  {!hasStarted ? (
    <S.PlayerPreview onClick={() => setHasStarted(true)}>
      {video.thumbnail ? (
        <S.PreviewImage src={video.thumbnail} alt={video.title} />
      ) : (
        <S.PreviewFallback />
      )}

      <S.PreviewOverlay>
        <S.PlayButton>▶</S.PlayButton>
        <S.PlayText>Clique para assistir</S.PlayText>
      </S.PreviewOverlay>
    </S.PlayerPreview>
  ) : !isPrerollFinished ? (
    <VideoPreroll onFinish={() => setIsPrerollFinished(true)} />
  ) : (
    <S.Iframe
      ref={iframeRef}
      src={`${video.videoUrl}?autoplay=true&t=${Date.now()}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  )}
</S.PlayerArea>
          <S.InfoArea>
            <S.Title>{video.title}</S.Title>

            <S.Views>
          {views.toLocaleString("pt-BR")} visualizações
            </S.Views>

            <HorizontalBanner />

           <S.ActionsRow>
  <S.SaveButton onClick={handleSave}>❤️ Salvar</S.SaveButton>
  <S.ShareButton onClick={handleShare}>🔗 Compartilhar</S.ShareButton>
</S.ActionsRow>

            {isAdmin && (
  <S.DeleteButton onClick={handleDelete}>
    Excluir vídeo
  </S.DeleteButton>
)}

            <S.TagsContainer>
            {(video.tags ?? []).map((tag) => (
                <S.Tag key={tag}>#{tag}</S.Tag>
              ))}
            </S.TagsContainer>

            <S.Description>{video.description}</S.Description>
          </S.InfoArea>
        </S.MainColumn>

        <S.SidebarAds>
          <S.SideAd>Anúncio lateral</S.SideAd>
          <S.SideAd>Anúncio lateral</S.SideAd>
        </S.SidebarAds>
      </S.ContentLayout>

      <S.AdMiddle>Espaço para anúncio</S.AdMiddle>

      <RelatedVideos currentVideo={video} videos={videos} />
    </S.Container>
  );
}