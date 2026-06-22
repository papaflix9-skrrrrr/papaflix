"use client";

import * as S from "./styles";

export function AdminLogin() {
  return (
    <S.Container>
      <S.Card>
        <S.Title>Login do Admin</S.Title>

        <S.Description>
          Área restrita para o dono postar e gerenciar os vídeos.
        </S.Description>

        <S.Form>
          <S.Input type="email" placeholder="E-mail" />
          <S.Input type="password" placeholder="Senha" />

          <S.Button type="button">Entrar</S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
}