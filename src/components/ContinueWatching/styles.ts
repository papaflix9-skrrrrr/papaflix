"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 26px 20px 4px;
`;

export const Header = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: #f5f3ff;

  font-size: 22px;
  font-weight: 900;
`;

export const Subtitle = styled.p`
  margin-top: 4px;

  color: #a1a1aa;

  font-size: 14px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px 16px;
  }
`;