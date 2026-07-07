"use client";

import { useEffect, useMemo, useState, useRef} from "react";

import { TagList } from "@/components/TagList";
import { VideoGrid } from "@/components/VideoGrid";
import { getVideos } from "@/services/videos";
import { Video } from "@/types/video";
import { AdCarousel } from "@/components/AdCarousel";
import { useSearchParams } from "next/navigation";
import { ContinueWatching } from "@/components/ContinueWatching";
import { TrendingVideos } from "@/components/TrendingVideos";
import { FavoriteVideos } from "@/components/FavoriteVideos";
import { NewVideos } from "@/components/NewVideos";
import { HorizontalBanner } from "@/components/Ads/HorizontalBanner";
import { MediumBanner } from "@/components/Ads/MediumBanner";

export default function HomeContent() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
const searchTerm = searchParams.get("q")?.toLowerCase().trim() ?? "";
const loadMoreRef = useRef<HTMLDivElement | null>(null);

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

  const maxVisible = filteredVideos.length;

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

  useEffect(() => {
  if (!loadMoreRef.current || !canShowMore) return;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      setVisibleCount((prev) =>
        Math.min(prev + 4, maxVisible, filteredVideos.length)
      );
    }
  });

  observer.observe(loadMoreRef.current);

  return () => observer.disconnect();
}, [canShowMore, filteredVideos.length, maxVisible]);


 if (isLoading) {
  return (
    <main>
      <AdCarousel />

      

      <VideoGrid
        videos={[]}
        isLoading
      />
    </main>
  );
}


  return (
    <main>
        <AdCarousel />

        <ContinueWatching videos={videos} />

        <MediumBanner />

        <TrendingVideos videos={videos} />

        <MediumBanner />
        <NewVideos videos={videos} />
        <MediumBanner />
        
<FavoriteVideos videos={videos} />

 <MediumBanner />

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
        {canShowMore && (
  <div
    ref={loadMoreRef}
    style={{
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#a1a1aa",
      fontSize: 13,
    }}
  >
    Carregando mais vídeos...
  </div>
)}
        </div>
      )}

      <AdCarousel />
    </main>
  );
}