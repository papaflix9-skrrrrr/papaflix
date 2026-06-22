"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 420px;

  padding: 28px;

  background: #160b26;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
`;

export const Title = styled.h1`
  color: #f5f3ff;

  font-size: 26px;
  font-weight: 900;
`;

export const Description = styled.p`
  margin-top: 8px;

  color: #a1a1aa;

  font-size: 14px;
  line-height: 1.5;
`;

export const Form = styled.form`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 13px 14px;

  background: #201034;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  color: #f5f3ff;

  outline: none;

  &::placeholder {
    color: #a1a1aa;
  }
`;

export const Button = styled.button`
  margin-top: 8px;

  padding: 13px 16px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;
  color: #ffffff;

  font-weight: 800;
`;