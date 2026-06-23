"use client";

import { Video } from "@/types/video";
import { saveVideo } from "@/utils/savedVideos";
import { RelatedVideos } from "../RelatedVideos";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL } from "@/config/admin";
import { listenAuthState } from "@/services/auth";
import { deleteVideo } from "@/services/videos";
import { incrementVideoViews } from "@/services/videos";

type Props = {
  video: Video;
  videos: Video[];
};

export function VideoDetails({ video, videos }: Props) {
  function handleSave() {
    saveVideo(video.id);
    alert("Vídeo salvo!");
  }

  const router = useRouter();
const [isAdmin, setIsAdmin] = useState(false);
const [views, setViews] = useState(video.views ?? 0);

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

  return (
    <S.Container>
      <S.BackButton href="/">← Voltar</S.BackButton>

      <S.AdTop>Espaço para anúncio</S.AdTop>

      <S.ContentLayout>
        <S.MainColumn>
          <S.PlayerArea>
         <S.Video
  controls
  controlsList="nodownload"
   onContextMenu={(event) => event.preventDefault()}
  poster={video.thumbnail || undefined}
>
  <source src={video.videoUrl} />
</S.Video>
          </S.PlayerArea>

          <S.InfoArea>
            <S.Title>{video.title}</S.Title>

            <S.Views>
          {views.toLocaleString("pt-BR")} visualizações
            </S.Views>

            <S.SaveButton onClick={handleSave}>❤️ Salvar</S.SaveButton>

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