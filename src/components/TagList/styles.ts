"use client";

import styled from "styled-components";

type TagButtonProps = {
  $active: boolean;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  overflow-x: auto;

  padding: 16px 20px 0;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 22px 28px 0;
  }
`;

export const TagButton = styled.button<TagButtonProps>`
  border: none;
  border-radius: 999px;

  padding: 9px 15px;

  background: ${({ $active }) => ($active ? "#8b5cf6" : "#201034")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#d4d4d8")};

  font-size: 13px;
  font-weight: 700;

  white-space: nowrap;

  transition: 0.2s ease;
`;