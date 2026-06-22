"use client";

import styled from "styled-components";

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

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -1px;
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

export const LinkItem = styled.span`
  color: #d4d4d8;
  font-size: 13px;
`;