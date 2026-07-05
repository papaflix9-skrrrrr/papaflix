"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 16px;
`;

export const AdTop = styled.div`
  width: 100%;
  min-height: 80px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #160b26;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  color: #a1a1aa;
  font-size: 13px;
`;

export const ContentLayout = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 300px;
    align-items: start;
  }
`;

export const MainColumn = styled.section`
  width: 100%;
`;

export const PlayerArea = styled.section`
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 14px;
  display: block;
`;

export const InfoArea = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 18px;

  font-size: 24px;
  font-weight: 800;

  color: #f5f3ff;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Views = styled.p`
  margin-top: 8px;

  color: #a1a1aa;
  font-size: 14px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  margin-top: 14px;
`;

export const Tag = styled.span`
  background: #201034;

  padding: 6px 10px;

  border-radius: 999px;

  color: #f5f3ff;

  font-size: 13px;
  font-weight: 600;
`;

export const Description = styled.p`
  margin-top: 18px;

  line-height: 1.8;

  color: #d4d4d8;
  font-size: 15px;
`;

export const SidebarAds = styled.aside`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const SideAd = styled.div`
  min-height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #160b26;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  color: #a1a1aa;
  font-size: 13px;
`;

export const AdMiddle = styled.div`
  width: 100%;
  min-height: 110px;

  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #160b26;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  color: #a1a1aa;
  font-size: 13px;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;

  margin-bottom: 16px;

  color: #a78bfa;

  font-size: 14px;
  font-weight: 700;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SaveButton = styled.button`
  

  height: 42px;

  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;

  color: white;

  font-weight: 700;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Video = styled.video`
  width: 100%;

  aspect-ratio: 16 / 9;

  border-radius: 14px;

  background: #000;
`;

export const DeleteButton = styled.button`
  margin-top: 12px;
  margin-left: 10px;

  height: 42px;

  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #dc2626;

  color: white;

  font-weight: 700;

  cursor: pointer;
`;

export const Iframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 14px;
  background: #000;
`;

export const PlayerPreview = styled.button`
  position: relative;

  width: 100%;
  aspect-ratio: 16 / 9;

  padding: 0;

  overflow: hidden;

  border: none;
  border-radius: 14px;

  background: #000;

  cursor: pointer;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;
`;

export const PreviewFallback = styled.div`
  width: 100%;
  height: 100%;

  background:
    radial-gradient(circle at center, rgba(139, 92, 246, 0.25), transparent 35%),
    #050208;
`;

export const PreviewOverlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
`;

export const PlayButton = styled.div`
  width: 74px;
  height: 74px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: rgba(139, 92, 246, 0.92);
  color: white;

  font-size: 30px;
  font-weight: 900;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
`;

export const PlayText = styled.span`
  margin-top: 12px;

  color: #f5f3ff;

  font-size: 14px;
  font-weight: 800;
`;

export const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 16px;
`;

export const ShareButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;

  background: #201034;
  color: white;

  font-weight: 700;

  cursor: pointer;
`;