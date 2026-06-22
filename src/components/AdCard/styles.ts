"use client";

import styled from "styled-components";

export const Container = styled.article`
  position: relative;

  width: 100%;
  aspect-ratio: 16 / 9;

  overflow: hidden;

  border-radius: 14px;

  background:
    linear-gradient(135deg, rgba(139, 92, 246, 0.45), rgba(239, 68, 68, 0.25)),
    #201034;

  border: 1px dashed rgba(255, 255, 255, 0.18);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;

  padding: 4px 8px;

  border-radius: 999px;

  background: rgba(0, 0, 0, 0.7);

  color: #ffffff;

  font-size: 11px;
  font-weight: 800;
`;

export const Content = styled.div`
  text-align: center;

  padding: 16px;
`;

export const Title = styled.h3`
  color: #f5f3ff;

  font-size: 16px;
  font-weight: 900;
`;

export const Text = styled.p`
  margin-top: 6px;

  color: #d4d4d8;

  font-size: 12px;
`;