"use client";

import { useEffect, useMemo, useState } from "react";

import { TagList } from "@/components/TagList";
import { VideoGrid } from "@/components/VideoGrid";
import { getVideos } from "@/services/videos";
import { Video } from "@/types/video";
import { AdCarousel } from "@/components/AdCarousel";
import { useSearchParams } from "next/navigation";

export default function HomeContent() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
const searchTerm = searchParams.get("q")?.toLowerCase().trim() ?? "";

  useEffect(() => {
    async function loadVideos() {
      try {
        const firestoreVideos = await getVideos();

        setVideos(firestoreVideos as Video[]);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar vídeos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadVideos();
  }, []);

  const tags = useMemo(() => {
    const uniqueTags = Array.from(
      new Set(videos.flatMap((video) => video.tags || []))
    );

    return ["Todos", ...uniqueTags];
  }, [videos]);

const filteredVideos = videos.filter((video) => {
  const matchesTag =
    selectedTag === "Todos" || video.tags?.includes(selectedTag);

  const matchesSearch =
    !searchTerm ||
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm) ||
    video.tags?.some((tag) => tag.toLowerCase().includes(searchTerm));

  return matchesTag && matchesSearch;
});

  const maxVisible = 12;

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const canShowMore =
    visibleCount < maxVisible && visibleCount < filteredVideos.length;

  function handleSelectTag(tag: string) {
    setSelectedTag(tag);
    setVisibleCount(8);
  }

  function handleShowMore() {
    setVisibleCount((prev) =>
      Math.min(prev + 4, maxVisible, filteredVideos.length)
    );
  }

  if (isLoading) {
    return (
      <main
        style={{
          padding: 40,
          textAlign: "center",
          color: "#a1a1aa",
        }}
      >
        Carregando vídeos...
      </main>
    );
  }

  return (
    <main>
        <AdCarousel />

      <TagList
        tags={tags}
        selectedTag={selectedTag}
        onSelectTag={handleSelectTag}
      />

      <VideoGrid videos={visibleVideos} showInlineAds />

      {canShowMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 20px 40px",
          }}
        >
          <button
            onClick={handleShowMore}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "12px 22px",
              background: "#8b5cf6",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Exibir mais
          </button>
        </div>
      )}

      <AdCarousel />
    </main>
  );
}