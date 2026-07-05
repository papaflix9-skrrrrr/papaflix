"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";

type Props = {
  onFinish: () => void;
};

export function VideoPreroll({ onFinish }: Props) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds <= 0) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, onFinish]);

  return (
    <S.Container>
      <S.AdBox>
        <S.Label>Anúncio</S.Label>
        <S.Title>Espaço para anúncio em vídeo</S.Title>
        <S.Text>O vídeo começará em {seconds} segundos.</S.Text>

        <S.ProgressBar>
          <S.Progress $progress={(5 - seconds) * 20} />
        </S.ProgressBar>
      </S.AdBox>
    </S.Container>
  );
}