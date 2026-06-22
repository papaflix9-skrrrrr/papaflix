import { getVideoById, getVideos } from "@/services/videos";
import { VideoDetails } from "./VideoDetails";
import { Video } from "@/types/video";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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