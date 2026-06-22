"use client";

import styled from "styled-components";

export const Container = styled.section`
  margin-top: 32px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  color: #f5f3ff;

  font-size: 22px;
  font-weight: 800;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 22px 16px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;