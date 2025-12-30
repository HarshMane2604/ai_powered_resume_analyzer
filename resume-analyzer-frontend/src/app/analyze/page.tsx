'use client';
import ResumeUploader from '@/components/analyzer/ResumeUploader';
import { AnalyzerResult } from '@/components/analyzer/AnalyzerResult';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen'>
      <ResumeUploader onAnalyze={() => {}} isAnalyzing={false} />
      <AnalyzerResult />
    </div>
  );
};

export default page;