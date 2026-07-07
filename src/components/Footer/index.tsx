"use client";

import * as S from "./styles";

export function Footer() {
  return (
    <S.Container>
      <S.Logo href="/">
        <S.Papa>Papa</S.Papa>
        <S.Flix>Flix</S.Flix>
      </S.Logo>

      <S.Text>
        © 2026 Papaflix. Todos os direitos reservados.
      </S.Text>

      <S.TechText>
        Powered by Bunny Stream • Firebase • Next.js
      </S.TechText>

      <S.Links>
        <S.LinkItem href="/terms">Termos</S.LinkItem>

        <S.LinkItem href="/privacy">
          Privacidade
        </S.LinkItem>

        <S.LinkItem href="/contact">
          Contato
        </S.LinkItem>

        <S.LinkItem href="/dmca">
          DMCA
        </S.LinkItem>
      </S.Links>

      <S.Version>
        Papaflix v1.0.0
      </S.Version>
    </S.Container>
  );
}