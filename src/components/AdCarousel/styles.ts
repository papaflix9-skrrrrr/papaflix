"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 14px 20px 0;

  @media (min-width: 768px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 18px 28px 0;
  }
`;

export const Scroll = styled.div`
  display: flex;
  gap: 12px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AdItem = styled.article`
  position: relative;

  min-width: 86%;
  height: 110px;

  flex-shrink: 0;
  scroll-snap-align: start;

  padding: 18px;

  border-radius: 16px;

  background:
    linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(239, 68, 68, 0.22)),
    #201034;

  border: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    min-width: 420px;
    height: 120px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;

  padding: 4px 8px;

  border-radius: 999px;

  background: rgba(0, 0, 0, 0.65);

  color: #fff;

  font-size: 11px;
  font-weight: 800;
`;

export const Title = styled.h3`
  color: #f5f3ff;

  font-size: 18px;
  font-weight: 900;
`;

export const Text = styled.p`
  margin-top: 6px;

  color: #d4d4d8;

  font-size: 13px;
`;