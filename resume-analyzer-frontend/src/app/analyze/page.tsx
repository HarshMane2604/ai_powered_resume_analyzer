'use client'
import Analyzer from '@/components/analyzer/Analyzer';
import React from 'react'

const page = () => {
  return (
    <div className=' min-h-screen'><Analyzer onAnalyze={() => {}} isAnalyzing={false} /></div>
  )
}

export default page;