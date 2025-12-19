'use client';
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/themeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbarPaths = ["/login", "/signup"];
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <BackgroundRippleEffect />
          {
            !hideNavbarPaths.includes(pathname) && (
              <div className="relative z-50">
                <Navbar />
              </div>
            )
          }

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
