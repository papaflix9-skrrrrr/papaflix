"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";

type Props = {
  onFinish: () => void;
};

export function VideoPreroll({ onFinish }: Props) {
  const [seconds, setSeconds] = useState(5);

  const canSkip = seconds <= 0;

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <S.Container>
      <S.AdBox>
        <S.Label>Anúncio</S.Label>

        <S.Title>Espaço para anúncio em vídeo</S.Title>

        <S.Text>
          {canSkip
            ? "Você já pode continuar para o vídeo."
            : `O vídeo poderá ser iniciado em ${seconds} segundos.`}
        </S.Text>

        <S.ProgressBar>
          <S.Progress $progress={(5 - seconds) * 20} />
        </S.ProgressBar>

        <S.SkipButton
          type="button"
          onClick={onFinish}
          disabled={!canSkip}
        >
          {canSkip ? "Pular anúncio" : `Pular em ${seconds}s`}
        </S.SkipButton>
      </S.AdBox>
    </S.Container>
  );
}