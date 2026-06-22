"use client";

import * as S from "./styles";

type Props = {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
};

export function TagList({ tags, selectedTag, onSelectTag }: Props) {
  return (
    <S.Container>
      {tags.map((tag) => (
        <S.TagButton
          key={tag}
          $active={selectedTag === tag}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </S.TagButton>
      ))}
    </S.Container>
  );
}