import { Suspense } from "react";
import HomeContent from "./HomeContent";


export default function Home() {
  return (
    <Suspense
      fallback={
        <main
          style={{
            padding: 40,
            textAlign: "center",
            color: "#a1a1aa",
          }}
        >
          Carregando vídeos...
        </main>
      }
    >
      <HomeContent />
    </Suspense>
  );
}