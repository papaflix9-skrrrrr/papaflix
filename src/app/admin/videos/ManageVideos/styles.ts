"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  width: 100%;

  padding: 24px;

  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  color: #f5f3ff;

  font-size: 30px;
  font-weight: 900;
`;

export const Description = styled.p`
  margin-top: 8px;

  color: #a1a1aa;
`;

export const List = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;

  background: #160b26;

  border-radius: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Thumbnail = styled.img`
  width: 180px;
  height: 100px;

  object-fit: cover;

  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    aspect-ratio: 16 / 9;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const VideoTitle = styled.h2`
  color: #f5f3ff;

  font-size: 18px;
  font-weight: 700;
`;

export const Views = styled.p`
  margin-top: 6px;

  color: #a1a1aa;

  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;

  color: white;

  font-weight: 700;
`;

export const DeleteButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #dc2626;

  color: white;

  font-weight: 700;
`;
export const ThumbnailPlaceholder = styled.div`
  width: 180px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #201034;
  color: #a1a1aa;

  border-radius: 10px;

  font-size: 13px;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;

  margin-bottom: 18px;

  color: #a78bfa;

  font-size: 14px;
  font-weight: 800;

  text-decoration: none;
`;