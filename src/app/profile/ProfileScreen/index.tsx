"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { VideoGrid } from "@/components/VideoGrid";
import { videos } from "@/data/videos";
import { ADMIN_EMAIL } from "@/config/admin";
import { getSavedVideos } from "@/utils/savedVideos";
import { listenAuthState, logout } from "@/services/auth";

import * as S from "./styles";

export function ProfileScreen() {
  const router = useRouter();

  const [savedVideos, setSavedVideos] = useState(videos.slice(0, 0));
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  async function handleLogout() {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.log(error);
      alert("Erro ao sair da conta.");
    }
  }

  useEffect(() => {
    const unsubscribe = listenAuthState((user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const savedIds = getSavedVideos();

      const filteredVideos = videos.filter((video) =>
        savedIds.includes(video.id)
      );

      setSavedVideos(filteredVideos);

      const admin =
        user.email?.toLowerCase().trim() ===
        ADMIN_EMAIL.toLowerCase().trim();

      setIsAdmin(admin);
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (isCheckingAuth) {
    return (
      <S.Container>
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "#a1a1aa",
          }}
        >
          Verificando login...
        </div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Meu perfil</S.Title>

        <S.Description>Seus vídeos salvos aparecerão aqui.</S.Description>

        {isAdmin && (
          <S.AdminActions>
            <S.AdminButton href="/admin/create-video">
              + Enviar vídeo
            </S.AdminButton>

            <S.AdminButton href="/admin/videos">
              Gerenciar vídeos
            </S.AdminButton>
          </S.AdminActions>
        )}

        <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
      </S.Header>

      {savedVideos.length > 0 ? (
        <VideoGrid videos={savedVideos} />
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "#a1a1aa",
          }}
        >
          Nenhum vídeo salvo ainda.
        </div>
      )}
    </S.Container>
  );
}