"use client";

import * as S from "./styles";

export function AdminDashboard() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Painel Admin</S.Title>

        <S.Description>
          Gerencie os vídeos, anúncios e estatísticas da plataforma.
        </S.Description>

        <S.Actions>
         <S.ActionCard href="/admin/create-video">
  <S.ActionTitle>Novo vídeo</S.ActionTitle>
  <S.ActionText>Enviar um novo vídeo para o site.</S.ActionText>
</S.ActionCard>

          <S.ActionCard href="/admin/create-video">
            <S.ActionTitle>Editar vídeos</S.ActionTitle>
            <S.ActionText>Alterar título, tags, thumbnail e descrição.</S.ActionText>
          </S.ActionCard>

          <S.ActionCard href="/admin/create-video">
            <S.ActionTitle>Estatísticas</S.ActionTitle>
            <S.ActionText>Ver visualizações e desempenho dos vídeos.</S.ActionText>
          </S.ActionCard>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
}