"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 80vh;

  padding: 32px 20px;

  display: flex;
  justify-content: center;
`;

export const Content = styled.article`
  width: 100%;
  max-width: 900px;

  padding: 28px;

  border-radius: 24px;

  background: #12081f;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Badge = styled.div`
  display: inline-flex;

  padding: 8px 14px;

  border-radius: 999px;

  background: #201034;
  color: #a78bfa;

  font-size: 13px;
  font-weight: 800;
`;

export const Title = styled.h1`
  margin-top: 18px;

  color: #f5f3ff;

  font-size: 32px;
  font-weight: 950;
`;

export const Updated = styled.p`
  margin-top: 8px;

  color: #a1a1aa;

  font-size: 14px;
`;

export const Section = styled.section`
  margin-top: 28px;
`;

export const SectionTitle = styled.h2`
  color: #f5f3ff;

  font-size: 20px;
  font-weight: 900;
`;

export const Text = styled.p`
  margin-top: 10px;

  color: #d4d4d8;

  font-size: 15px;
  line-height: 1.8;
`;