"use client";

import * as S from "./styles";

const ads = [
  {
    id: "1",
    title: "Anúncio 1",
    text: "Espaço publicitário",
  },
  {
    id: "2",
    title: "Anúncio 2",
    text: "Banner promocional",
  },
  {
    id: "3",
    title: "Anúncio 3",
    text: "Divulgação",
  },
];

export function AdCarousel() {
  return (
    <S.Container>
      <S.Scroll>
        {ads.map((ad) => (
          <S.AdItem key={ad.id}>
            <S.Badge>Anúncio</S.Badge>
            <S.Title>{ad.title}</S.Title>
            <S.Text>{ad.text}</S.Text>
          </S.AdItem>
        ))}
      </S.Scroll>
    </S.Container>
  );
}