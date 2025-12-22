'use client';
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import React from "react";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbarPaths = ["/login", "/signup"];

  return (
    <>
      <BackgroundRippleEffect />
      {!hideNavbarPaths.includes(pathname) && (
        <div className="relative z-50">
          <Navbar />
        </div>
      )}
      {children}
    </>
  );
}
