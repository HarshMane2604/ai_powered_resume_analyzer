"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { analysisSuccess, clearAnalysis } from "@/redux/sclices/resumeSlice";
import { sampleResumeData } from "@/data/sampleResumeData";
import { AnalyzerResult } from "@/components/analyzer/AnalyzerResult";

export default function SampleReportPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 1. Dispatch the static data into Redux state on mount
    dispatch(analysisSuccess({ success: true, data: sampleResumeData as any }));

    // 2. Clear it on unmount so it doesn't bleed into the real /analyze page
    return () => {
      dispatch(clearAnalysis());
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen relative z-10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[-3rem]">
        {/* Banner indicating it's a sample */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            📋 This is a <strong>sample report</strong>. Analyze your own resume
            to get personalized results.
          </p>
          <Link href="/analyze">
            <button className="whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer transition-colors">
              Analyze Mine &rarr;
            </button>
          </Link>
        </div>
      </div>

      {/* 
        This is our existing component. Because we dispatched the data into Redux above, 
        AnalyzerResult will read it from state and render normally!
      */}
      <AnalyzerResult />
    </div>
  );
}
