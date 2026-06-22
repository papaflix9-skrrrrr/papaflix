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
`;