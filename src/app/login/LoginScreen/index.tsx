"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ADMIN_EMAIL } from "@/config/admin";
import { loginWithEmail, registerWithEmail } from "@/services/auth";

import * as S from "./styles";

export function LoginScreen() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit() {
    try {
      if (mode === "register" && password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
      }

      const response =
        mode === "login"
          ? await loginWithEmail(email, password)
          : await registerWithEmail(email, password);

      const loggedUserEmail = response.user.email;

      if (
        loggedUserEmail?.toLowerCase().trim() ===
        ADMIN_EMAIL.toLowerCase().trim()
      ) {
        router.push("/admin");
        return;
      }

      router.push("/profile");
    } catch (error) {
      alert(
        mode === "login"
          ? "E-mail ou senha inválidos."
          : "Não foi possível criar a conta."
      );

      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Card>
        <S.Title>{mode === "login" ? "Entrar" : "Criar conta"}</S.Title>

        <S.Description>
          {mode === "login"
            ? "Entre para salvar vídeos e acessar sua área."
            : "Crie uma conta para salvar seus vídeos favoritos."}
        </S.Description>

        <S.Form>
          <S.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <S.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {mode === "register" && (
            <S.Input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          )}

          <S.Button type="button" onClick={handleSubmit}>
            {mode === "login" ? "Entrar" : "Criar conta"}
          </S.Button>
        </S.Form>

        <S.SwitchText>
          {mode === "login" ? "Ainda não tem conta?" : "Já tem uma conta?"}
          <S.SwitchButton
            type="button"
            onClick={() => {
              setMode((current) =>
                current === "login" ? "register" : "login"
              );
              setConfirmPassword("");
            }}
          >
            {mode === "login" ? "Criar conta" : "Entrar"}
          </S.SwitchButton>
        </S.SwitchText>

        <S.Note>Visitantes podem assistir aos vídeos sem fazer login.</S.Note>
      </S.Card>
    </S.Container>
  );
}