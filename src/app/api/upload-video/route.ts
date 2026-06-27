import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "Vídeo não enviado." },
        { status: 400 }
      );
    }

    const libraryId = process.env.BUNNY_STREAM_LIBRARY_ID;
    const accessKey = process.env.BUNNY_STREAM_ACCESS_KEY;

    console.log({
      libraryId,
      hasAccessKey: !!accessKey,
    });

    if (!libraryId || !accessKey) {
      return NextResponse.json(
        { error: "Configuração Bunny Stream ausente." },
        { status: 500 }
      );
    }

    const createResponse = await fetch(
      `https://video.bunnycdn.com/library/${libraryId}/videos`,
      {
        method: "POST",
        headers: {
          AccessKey: accessKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title || file.name,
        }),
      }
    );

    if (!createResponse.ok) {
      const text = await createResponse.text();
      console.error("Erro ao criar vídeo Bunny:", text);

      return NextResponse.json(
        { error: "Erro ao criar vídeo na Bunny." },
        { status: 500 }
      );
    }

    const createdVideo = await createResponse.json();
    const videoId = createdVideo.guid;

    const bytes = Buffer.from(await file.arrayBuffer());

    const uploadResponse = await fetch(
      `https://video.bunnycdn.com/library/${libraryId}/videos/${videoId}`,
      {
        method: "PUT",
        headers: {
          AccessKey: accessKey,
          "Content-Type": "application/octet-stream",
        },
        body: bytes,
      }
    );

    if (!uploadResponse.ok) {
      const text = await uploadResponse.text();
      console.error("Erro ao enviar vídeo Bunny:", text);

      return NextResponse.json(
        { error: "Erro ao enviar vídeo para Bunny." },
        { status: 500 }
      );
    }

    const embedUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`;

    return NextResponse.json({
      videoId,
      videoUrl: embedUrl,
    });
  } catch (error) {
    console.error("Erro interno upload video:", error);

    return NextResponse.json(
      { error: "Erro interno no upload de vídeo." },
      { status: 500 }
    );
  }
}