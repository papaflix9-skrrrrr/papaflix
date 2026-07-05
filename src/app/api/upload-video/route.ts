import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

export async function POST(request: Request) {
  try {
    const { title } = await request.json();

    const libraryId = process.env.BUNNY_STREAM_LIBRARY_ID;
    const accessKey = process.env.BUNNY_STREAM_ACCESS_KEY;
    const streamPublicUrl = process.env.BUNNY_STREAM_PUBLIC_URL;

    if (!libraryId || !accessKey || !streamPublicUrl) {
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
          title: title || "Vídeo sem título",
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

    const expirationTime = Math.floor(Date.now() / 1000) + 86400;

    const signature = createHash("sha256")
      .update(`${libraryId}${accessKey}${expirationTime}${videoId}`)
      .digest("hex");

    const videoUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`;
    const thumbnailUrl = `${streamPublicUrl}/${videoId}/thumbnail.jpg`;

    return NextResponse.json({
      videoId,
      libraryId,
      expirationTime,
      signature,
      videoUrl,
      thumbnailUrl,
    });
  } catch (error) {
    console.error("Erro interno Bunny TUS:", error);

    return NextResponse.json(
      { error: "Erro interno no upload de vídeo." },
      { status: 500 }
    );
  }
}