"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: #050208;
`;

export const AdBox = styled.div`
  width: min(90%, 460px);

  padding: 24px;

  border-radius: 22px;

  background: #160b26;
  border: 1px solid rgba(255, 255, 255, 0.1);

  text-align: center;
`;

export const Label = styled.p`
  color: #a78bfa;
  font-size: 13px;
  font-weight: 900;
`;

export const Title = styled.h2`
  margin-top: 10px;

  color: #f5f3ff;
  font-size: 22px;
  font-weight: 950;
`;

export const Text = styled.p`
  margin-top: 8px;

  color: #a1a1aa;
  font-size: 14px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;

  margin-top: 18px;

  overflow: hidden;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.08);
`;

export const Progress = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;

  background: #8b5cf6;

  transition: width 0.3s ease;
`;

export const SkipButton = styled.button`
  height: 42px;

  margin-top: 18px;
  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;
  color: white;

  font-weight: 900;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;