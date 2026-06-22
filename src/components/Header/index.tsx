"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import * as S from "./styles";

export function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch() {
    const term = search.trim();

    if (!term) {
      router.push("/");
      return;
    }

    router.push(`/?q=${encodeURIComponent(term)}`);
  }

  return (
    <S.Container>
      <S.Logo href="/">
        <S.Papa>Papa</S.Papa>
        <S.Flix>Flix</S.Flix>
      </S.Logo>

      <S.Actions>
        <S.SearchBox>
          <S.SearchInput
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Buscar vídeos..."
          />

          <S.SearchIcon onClick={handleSearch}>🔍</S.SearchIcon>
        </S.SearchBox>

        <S.ProfileButton href="/profile">
          <FiUser />
        </S.ProfileButton>
      </S.Actions>
    </S.Container>
  );
}