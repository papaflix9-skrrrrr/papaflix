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