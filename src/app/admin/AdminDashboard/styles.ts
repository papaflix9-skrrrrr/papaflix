"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);

  padding: 24px;

  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1100px;
`;

export const Title = styled.h1`
  color: #f5f3ff;

  font-size: 28px;
  font-weight: 900;
`;

export const Description = styled.p`
  margin-top: 8px;

  color: #a1a1aa;

  font-size: 15px;
`;

export const Actions = styled.div`
  margin-top: 28px;

  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ActionCard = styled(Link)`
  width: 100%;

  padding: 22px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;

  background: #160b26;

  text-align: left;

  transition: 0.2s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.7);
    background: #201034;
  }
`;

export const ActionTitle = styled.h2`
  color: #f5f3ff;

  font-size: 18px;
  font-weight: 800;
`;

export const ActionText = styled.p`
  margin-top: 8px;

  color: #a1a1aa;

  font-size: 14px;
  line-height: 1.5;
`;