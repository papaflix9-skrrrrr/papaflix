"use client";

import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  overflow: hidden;
  border-radius: 14px;

  background: #201034;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
`;

export const Duration = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;

  padding: 3px 6px;
  border-radius: 6px;

  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;

  font-size: 11px;
  font-weight: 700;
`;

export const Title = styled.h2`
  margin-top: 8px;

  color: #f5f3ff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
`;

export const Meta = styled.p`
  margin-top: 4px;

  color: #a1a1aa;
  font-size: 12px;
`;

export const Tags = styled.div`
  margin-top: 6px;

  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  color: #a78bfa;
  font-size: 11px;
  font-weight: 600;
`;