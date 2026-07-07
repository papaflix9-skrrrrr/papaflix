"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.footer`
  width: 100%;

  margin-top: 40px;
  padding: 28px 20px;

  background: #0b0614;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -1px;

  text-decoration: none;
`;

export const Papa = styled.span`
  color: #a78bfa;
`;

export const Flix = styled.span`
  color: #ef4444;
`;

export const Text = styled.p`
  color: #a1a1aa;
  font-size: 13px;
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkItem = styled(Link)`
  color: #a1a1aa;
  font-size: 13px;

  text-decoration: none;

  transition: 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const TechText = styled.p`
  color: #777;

  font-size: 12px;

  text-align: center;

`;

export const Version = styled.p`
  color: #555;

  font-size: 11px;

  letter-spacing: 1px;
`;

