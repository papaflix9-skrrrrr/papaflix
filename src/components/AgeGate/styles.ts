"use client";

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(16px);
`;

export const BlurBackground = styled.div`
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle at top, rgba(139, 92, 246, 0.22), transparent 35%),
    radial-gradient(circle at bottom, rgba(220, 38, 38, 0.14), transparent 35%);
`;

export const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 560px;

  padding: 34px 24px;

  border-radius: 28px;

  background: rgba(18, 8, 31, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);

  text-align: center;

  box-shadow: 0 24px 90px rgba(0, 0, 0, 0.65);
`;

export const Logo = styled.h2`
  color: #f5f3ff;
  font-size: 28px;
  font-weight: 950;

  span {
    color: #a78bfa;
  }
`;

export const Badge = styled.div`
  width: 78px;
  height: 78px;

  margin: 22px auto 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: linear-gradient(135deg, #dc2626, #8b5cf6);
  color: white;

  font-size: 28px;
  font-weight: 950;
`;

export const Title = styled.h1`
  color: #f5f3ff;
  font-size: 28px;
  font-weight: 950;
`;

export const Text = styled.p`
  margin-top: 14px;

  color: #d4d4d8;

  font-size: 15px;
  line-height: 1.65;
`;

export const Actions = styled.div`
  margin-top: 28px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EnterButton = styled.button`
  height: 50px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;
  color: white;

  font-size: 15px;
  font-weight: 900;

  cursor: pointer;
`;

export const ExitButton = styled.button`
  height: 48px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.04);
  color: #e4e4e7;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;
`;

export const Links = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
`;

export const LinkItem = styled.span`
  color: #a78bfa;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;
`;

export const FooterText = styled.p`
  margin-top: 18px;

  color: #71717a;

  font-size: 12px;
`;