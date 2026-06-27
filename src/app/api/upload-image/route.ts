import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo não enviado." },
        { status: 400 }
      );
    }

  const storageZone = process.env.BUNNY_STORAGE_ZONE;
const storageAccessKey = process.env.BUNNY_STORAGE_ACCESS_KEY;
const storageEndpoint = process.env.BUNNY_STORAGE_ENDPOINT;
const storagePublicUrl = "https://papapullzone.b-cdn.net";



    if (
      !storageZone ||
      !storageAccessKey ||
      !storageEndpoint ||
      !storagePublicUrl
    ) {
      return NextResponse.json(
        { error: "Configuração Bunny Storage ausente." },
        { status: 500 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const fileExtension = file.name.split(".").pop() || "jpg";
    const fileName = `thumbnails/${crypto.randomUUID()}.${fileExtension}`;

    // ESTA LINHA TINHA SUMIDO
    const uploadUrl = `${storageEndpoint}/${storageZone}/${fileName}`;

    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        AccessKey: storageAccessKey,
        "Content-Type": "application/octet-stream",
      },
      body: bytes,
    });

    if (!response.ok) {
      const text = await response.text();

      console.error("Bunny upload error:", response.status, text);

      return NextResponse.json(
        { error: `Erro Bunny: ${response.status}` },
        { status: 500 }
      );
    }

    // SÓ EXISTE UMA VEZ
    const publicUrl = `${storagePublicUrl}/${fileName}`;

    return NextResponse.json({
      url: publicUrl,
    });
  } catch (error) {
    console.error("Erro interno no upload:", error);

    return NextResponse.json(
      { error: "Erro interno no upload." },
      { status: 500 }
    );
  }
}