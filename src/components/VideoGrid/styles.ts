"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px 12px;

  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 16px;
    padding: 28px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1280px;
    margin: 0 auto;
  }
    @keyframes shimmer {
    from {
      background-position: 200% 0;
    }

    to {
      background-position: -200% 0;
    }
  }
`;

export const SkeletonCard = styled.div`
  width: 100%;
`;

export const SkeletonThumb = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  border-radius: 14px;

  background: linear-gradient(
    90deg,
    #160b26 0%,
    #24113d 50%,
    #160b26 100%
  );

  background-size: 200% 100%;

  animation: shimmer 1.4s infinite;
`;

export const SkeletonLine = styled.div`
  width: 86%;
  height: 14px;

  margin-top: 12px;

  border-radius: 999px;

  background: #24113d;
`;

export const SkeletonSmallLine = styled.div`
  width: 46%;
  height: 12px;

  margin-top: 8px;

  border-radius: 999px;

  background: #1b0d2e;
`;
