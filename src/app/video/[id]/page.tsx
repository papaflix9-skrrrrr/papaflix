import type { Metadata } from "next";

import { getVideoById, getVideos } from "@/services/videos";
import { VideoDetails } from "./VideoDetails";
import { Video } from "@/types/video";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const SITE_URL = "https://papaflix.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const video = await getVideoById(id);

  if (!video) {
    return {
      title: "Vídeo não encontrado | Papaflix",
      description: "Este vídeo não foi encontrado no Papaflix.",
    };
  }

  const title = `${video.title} | Papaflix`;
  const description =
    video.description || "Assista este vídeo no Papaflix.";
  const url = `${SITE_URL}/video/${id}`;
  const image = video.thumbnail || `${SITE_URL}/og-image.png`;

  return {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Papaflix",
    type: "video.other",
    images: [
      {
        url: image,
        width: 1280,
        height: 720,
        alt: video.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};
}

export default async function VideoPage({ params }: Props) {
  const { id } = await params;

  const video = await getVideoById(id);
  const videos = await getVideos();

  if (!video) {
    return <h1>Vídeo não encontrado</h1>;
  }

  return (
    <VideoDetails
      video={video as Video}
      videos={videos as Video[]}
    />
  );
}