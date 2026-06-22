"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Header = styled.section`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 24px 20px 0;
`;

export const Title = styled.h1`
  color: #f5f3ff;
  font-size: 28px;
  font-weight: 900;
`;

export const Description = styled.p`
  margin-top: 8px;

  color: #a1a1aa;
  font-size: 14px;
`;

export const LogoutButton = styled.button`
  margin-top: 16px;

  height: 42px;

  padding: 0 18px;

  border: none;
  border-radius: 999px;

  background: #dc2626;

  color: white;

  font-weight: 700;

  cursor: pointer;
`;

export const AdminActions = styled.div`
  margin-top: 18px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AdminButton = styled(Link)`
  height: 42px;

  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: #8b5cf6;
  color: white;

  font-weight: 800;
  text-decoration: none;
`;