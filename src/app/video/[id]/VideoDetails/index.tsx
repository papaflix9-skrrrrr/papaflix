"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Video } from "@/types/video";
import { saveVideo } from "@/utils/savedVideos";
import { RelatedVideos } from "../RelatedVideos";
import { ADMIN_EMAIL } from "@/config/admin";
import { listenAuthState } from "@/services/auth";
import { deleteVideo, incrementVideoViews } from "@/services/videos";
import { HorizontalBanner } from "@/components/Ads/HorizontalBanner";
// import { VideoPreroll } from "@/components/Ads/VideoPreroll";
import { trackEvent } from "@/utils/analytics";
import {
  getProgress,
  removeProgress,
  saveProgress,
} from "@/utils/continueWatching";

import * as S from "./styles";

type Props = {
  video: Video;
  videos: Video[];
};

export function VideoDetails({ video, videos }: Props) {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [views, setViews] = useState(video.views ?? 0);
  const [hasStarted, setHasStarted] = useState(false);

  // Pré-roll temporariamente desativado.
  // Na Sprint 2 ele volta integrado ao sistema de monetização.
  const [isPrerollFinished] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  async function handleSave() {
    const unsubscribe = listenAuthState((user) => {
      unsubscribe();

      if (!user) {
        alert("Entre na sua conta para salvar vídeos.");
        router.push("/login");
        return;
      }

      saveVideo(video.id);

      trackEvent("video_save", {
        video_id: video.id,
        video_title: video.title,
      });

      alert("Vídeo salvo!");
    });
  }

  async function handleDelete() {
    const confirmDelete = confirm("Tem certeza que deseja excluir este vídeo?");

    if (!confirmDelete) return;

    await deleteVideo(video.id);

    alert("Vídeo excluído.");
    router.push("/");
  }

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: video.title,
        text: video.description,
        url,
      });

      trackEvent("video_share", {
        video_id: video.id,
        video_title: video.title,
      });

      return;
    }

    await navigator.clipboard.writeText(url);

    trackEvent("video_share", {
      video_id: video.id,
      video_title: video.title,
    });

    alert("Link copiado!");
  }

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

  useEffect(() => {
    if (!hasStarted || !isPrerollFinished || !iframeRef.current) return;

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
  }, [hasStarted, isPrerollFinished, video.id]);

  return (
    <S.Container>
      <S.BackButton href="/">← Voltar</S.BackButton>

      <S.AdTop>Espaço para anúncio</S.AdTop>

      <S.ContentLayout>
        <S.MainColumn>
          <S.PlayerArea>
            {!hasStarted ? (
              <S.PlayerPreview
                onClick={() => {
                  setHasStarted(true);

                  trackEvent("video_play", {
                    video_id: video.id,
                    video_title: video.title,
                  });
                }}
              >
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
            ) : (
              <>
                {/*
                  Pré-roll desativado temporariamente.

                  Na Sprint 2, para reativar, volte com:

                  !isPrerollFinished ? (
                    <VideoPreroll onFinish={() => setIsPrerollFinished(true)} />
                  ) : (
                    <S.Iframe ... />
                  )
                */}

                <S.Iframe
                  ref={iframeRef}
                  src={`${video.videoUrl}?autoplay=true&t=${Date.now()}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </>
            )}
          </S.PlayerArea>

          <S.InfoArea>
            <S.Title>{video.title}</S.Title>

            <S.Views>{views.toLocaleString("pt-BR")} visualizações</S.Views>

            <HorizontalBanner />

            <S.ActionsRow>
              <S.SaveButton onClick={handleSave}>❤️ Salvar</S.SaveButton>

              <S.ShareButton onClick={handleShare}>
                🔗 Compartilhar
              </S.ShareButton>
            </S.ActionsRow>

            {isAdmin && (
              <S.AdminActions>
                <S.EditButton href={`/admin/videos/${video.id}/edit`}>
                  Editar
                </S.EditButton>

                <S.DeleteButton onClick={handleDelete}>
                  Excluir
                </S.DeleteButton>
              </S.AdminActions>
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