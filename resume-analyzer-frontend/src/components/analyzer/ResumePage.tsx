'use client'
import React from 'react'
import ResumeUploader from './ResumeUploader'
import { AnalyzerResult } from './AnalyzerResult'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
export const ResumePage = () => {
  
    const { data } = useAppSelector((state)=>(state.resume))

    return (
    <div className='space-y-10'>
        { data ? <AnalyzerResult /> : <ResumeUploader /> }
    </div>
  )
}
