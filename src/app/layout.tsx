import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papaflix",
  description: "Plataforma de vídeos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
  src="https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js"
  strategy="beforeInteractive"
/>
       <StyledComponentsRegistry>
          <AgeGate />
  <Header />
  {children}
   <GoogleAnalytics />
  <Footer/>
</StyledComponentsRegistry>
      </body>
    </html>
  );
}