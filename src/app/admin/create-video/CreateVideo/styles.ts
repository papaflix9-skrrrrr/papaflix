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
  max-width: 900px;
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

export const Form = styled.div`
  margin-top: 28px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 14px;

  background: #201034;

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;

  color: #fff;

  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;

  min-height: 180px;

  padding: 14px;

  background: #201034;

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;

  color: #fff;

  resize: vertical;

  outline: none;
`;

export const PublishButton = styled.button`
  height: 50px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;

  color: white;

  font-weight: 800;

  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #f5f3ff;
  font-size: 14px;
  font-weight: 700;
`;

export const FileInput = styled.input`
  width: 100%;

  padding: 14px;

  background: #201034;

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;

  color: #fff;

  cursor: pointer;
`;

export const BackButton = styled(Link)`
  display: inline-flex;

  margin-bottom: 18px;

  color: #a78bfa;

  font-size: 14px;
  font-weight: 800;

  text-decoration: none;
`;