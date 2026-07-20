"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { Loader2 } from "lucide-react";
import { ResumePage } from "@/components/analyzer/ResumePage";

const page = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(`/login?redirect=${window.location.pathname}`);
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="min-h-screen relative z-10">
      <ResumePage />
    </div>
  );
};

export default page;
