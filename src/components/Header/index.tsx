"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";

import { getVideos } from "@/services/videos";
import { trackEvent } from "@/utils/analytics";
import { Video } from "@/types/video";

import * as S from "./styles";

export function Header() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await getVideos();
        setVideos(data as Video[]);
      } catch (error) {
        console.log(error);
      }
    }

    loadVideos();
  }, []);

  const suggestions = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return [];

    return videos
      .filter((video) => {
        const title = video.title.toLowerCase();
        const description = video.description.toLowerCase();
        const tags = video.tags?.join(" ").toLowerCase() ?? "";

        return (
          title.includes(term) ||
          description.includes(term) ||
          tags.includes(term)
        );
      })
      .slice(0, 5);
  }, [search, videos]);

  function handleSearch() {
    const term = search.trim();

    trackEvent("search", {
  search_term: term,
});

    if (!term) {
      router.push("/");
      return;
    }

    router.push(`/?q=${encodeURIComponent(term)}`);
    setIsFocused(false);
  }

  function handleOpenVideo(videoId: string) {
    setSearch("");
    setIsFocused(false);
    router.push(`/video/${videoId}`);
  }

  return (
    <S.Container>
      <S.Logo href="/">
        <S.Papa>Papa</S.Papa>
        <S.Flix>Flix</S.Flix>
      </S.Logo>

      <S.Actions>
        <S.SearchArea>
          <S.SearchBox>
            <S.SearchInput
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }

                if (event.key === "Escape") {
                  setIsFocused(false);
                }
              }}
              placeholder="Buscar vídeos..."
            />

            <S.SearchIcon onClick={handleSearch}>🔍</S.SearchIcon>
          </S.SearchBox>

          {isFocused && suggestions.length > 0 && (
            <S.Suggestions>
              {suggestions.map((video) => (
                <S.SuggestionItem
                  key={video.id}
                  type="button"
                  onMouseDown={() => handleOpenVideo(video.id)}
                >
                  {video.thumbnail ? (
                    <S.SuggestionThumb src={video.thumbnail} alt={video.title} />
                  ) : (
                    <S.SuggestionThumbFallback>▶</S.SuggestionThumbFallback>
                  )}

                  <S.SuggestionInfo>
                    <S.SuggestionTitle>{video.title}</S.SuggestionTitle>
                    <S.SuggestionMeta>
                      {(video.views ?? 0).toLocaleString("pt-BR")} visualizações
                    </S.SuggestionMeta>
                  </S.SuggestionInfo>
                </S.SuggestionItem>
              ))}
            </S.Suggestions>
          )}
        </S.SearchArea>

        <S.ProfileButton href="/profile">
          <FiUser />
        </S.ProfileButton>
      </S.Actions>
    </S.Container>
  );
}