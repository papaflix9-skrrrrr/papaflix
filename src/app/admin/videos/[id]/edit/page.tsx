import { EditVideo } from "@/components/EditVideo";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditVideoPage({ params }: Props) {
  const { id } = await params;

  return <EditVideo videoId={id} />;
}