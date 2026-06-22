"use client";

import * as S from "./styles";

export function Footer() {
  return (
    <S.Container>
      <S.Logo>
        <S.Papa>Papa</S.Papa>
        <S.Flix>Flix</S.Flix>
      </S.Logo>

      <S.Text>
        © 2026 Papaflix. Todos os direitos reservados.
      </S.Text>

      <S.Links>
        <S.LinkItem>Termos</S.LinkItem>
        <S.LinkItem>Privacidade</S.LinkItem>
        <S.LinkItem>Contato</S.LinkItem>
      </S.Links>
    </S.Container>
  );
}