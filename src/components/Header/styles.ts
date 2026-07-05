"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  background: #160b26;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 30px;
  font-weight: 900;

  letter-spacing: -1.5px;

  text-decoration: none;

  text-shadow: 0 0 15px rgba(139, 92, 246, 0.35);
`;

export const Papa = styled.span`
  color: #a78bfa;
`;

export const Flix = styled.span`
  color: #ef4444;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 180px;

  padding: 8px 10px;

  background: #201034;
  border-radius: 999px;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;

  background: transparent;
  border: none;
  outline: none;

  color: #f5f3ff;

  font-size: 13px;

  &::placeholder {
    color: #a1a1aa;
  }
`;

export const SearchIcon = styled.span`
  font-size: 15px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileButton = styled(Link)`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #201034;

  border-radius: 50%;

  color: #f5f3ff;

  text-decoration: none;

  transition: 0.2s ease;

  &:hover {
    background: #2d1848;
  }

  svg {
    font-size: 18px;
  }
`;

export const SearchArea = styled.div`
  position: relative;
`;

export const Suggestions = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;

  width: 320px;
  max-width: 86vw;

  z-index: 50;

  padding: 8px;

  border-radius: 16px;

  background: #160b26;
  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
`;

export const SuggestionItem = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px;

  border: none;
  border-radius: 12px;

  background: transparent;

  text-align: left;

  cursor: pointer;

  &:hover {
    background: #201034;
  }
`;

export const SuggestionThumb = styled.img`
  width: 74px;
  aspect-ratio: 16 / 9;

  object-fit: cover;

  border-radius: 8px;

  background: #201034;
`;

export const SuggestionThumbFallback = styled.div`
  width: 74px;
  aspect-ratio: 16 / 9;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: #201034;
  color: #f5f3ff;

  font-size: 18px;
  font-weight: 900;
`;

export const SuggestionInfo = styled.div`
  min-width: 0;
`;

export const SuggestionTitle = styled.p`
  color: #f5f3ff;

  font-size: 13px;
  font-weight: 800;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SuggestionMeta = styled.p`
  margin-top: 4px;

  color: #a1a1aa;

  font-size: 11px;
`;