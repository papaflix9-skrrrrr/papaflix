"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AGE_GATE_KEY = "@papaflix:age-accepted";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

export function AgeGate() {
  const [shouldShow, setShouldShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem(AGE_GATE_KEY);

    if (!saved) {
      setShouldShow(true);
      return;
    }

    const parsed = JSON.parse(saved) as { acceptedAt: number };
    const isExpired = Date.now() - parsed.acceptedAt > THIRTY_DAYS;

    if (isExpired) {
      localStorage.removeItem(AGE_GATE_KEY);
      setShouldShow(true);
    }
  }, []);

  function handleEnter() {
    localStorage.setItem(
      AGE_GATE_KEY,
      JSON.stringify({ acceptedAt: Date.now() })
    );

    setShouldShow(false);
  }

  function handleExit() {
    window.location.href = "/leave";
  }

   if (pathname === "/leave") {
  return null;
}


  if (!shouldShow) return null;

  

  return (
    <S.Overlay>
      <S.BlurBackground />

      <S.Modal>
        <S.Logo>
          Papa<span>Flix</span>
        </S.Logo>

        <S.Badge>+18</S.Badge>

        <S.Title>Confirmação de idade</S.Title>

        <S.Text>
          Este site contém conteúdo adulto destinado exclusivamente para maiores
          de 18 anos. Ao continuar, você declara possuir idade legal para acessar
          este tipo de conteúdo e confirma que a visualização é permitida em sua
          região.
        </S.Text>

        <S.Actions>
          <S.EnterButton onClick={handleEnter}>
            Tenho 18 anos ou mais
          </S.EnterButton>

          <S.ExitButton onClick={handleExit}>
            Sair do site
          </S.ExitButton>
        </S.Actions>

      <S.Links>
  <S.LinkItem href="/terms">Termos</S.LinkItem>
  <S.LinkItem href="/privacy">Privacidade</S.LinkItem>
  <S.LinkItem href="/dmca">DMCA</S.LinkItem>
  <S.LinkItem href="/contact">Contato</S.LinkItem>
</S.Links>

        <S.FooterText>
          O acesso é permitido apenas para usuários maiores de idade.
        </S.FooterText>
      </S.Modal>
    </S.Overlay>
  );
}