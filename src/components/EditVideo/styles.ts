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

export const UploadCard = styled.div`
  margin-top: 12px;

  padding: 18px;

  background: #160b26;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
`;

export const UploadTitle = styled.h3`
  color: #f5f3ff;

  font-size: 15px;
  font-weight: 800;
`;

export const UploadText = styled.p`
  margin-top: 6px;

  color: #a1a1aa;

  font-size: 14px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;

  margin-top: 18px;

  overflow: hidden;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.08);
`;

export const Progress = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;

  border-radius: inherit;

  background: linear-gradient(
    90deg,
    #8b5cf6,
    #a855f7,
    #c084fc
  );

  transition: width .25s ease;
`;

export const ProgressValue = styled.p`
  margin-top: 10px;

  text-align: right;

  color: #d4d4d8;

  font-size: 13px;
  font-weight: 700;
`;

export const Preview = styled.div`
  width: 100%;
  max-width: 360px;

  overflow: hidden;

  border-radius: 14px;

  background: #201034;
`;

export const PreviewImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;

  object-fit: cover;

  display: block;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #f5f3ff;

  font-size: 14px;
  font-weight: 700;

  input {
    width: 18px;
    height: 18px;
  }
`;

export const SaveButton = styled.button`
  height: 50px;

  border: none;
  border-radius: 999px;

  background: #8b5cf6;

  color: white;

  font-weight: 800;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;