"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { listenAuthState } from "@/services/auth";
import { ADMIN_EMAIL } from "@/config/admin";

import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export function AdminGuard({ children }: Props) {
  const router = useRouter();

  const [isChecking, setIsChecking] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const unsubscribe = listenAuthState((user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const isAdmin =
        user.email?.toLowerCase().trim() ===
        ADMIN_EMAIL.toLowerCase().trim();

      if (!isAdmin) {
        router.replace("/");
        return;
      }

      setIsAllowed(true);
      setIsChecking(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (isChecking) {
    return (
      <S.Container>
        <S.Text>Verificando acesso...</S.Text>
      </S.Container>
    );
  }

  if (!isAllowed) {
    return null;
  }

  return <>{children}</>;
}