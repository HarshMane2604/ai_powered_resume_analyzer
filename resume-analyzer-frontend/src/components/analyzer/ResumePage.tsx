import React from 'react'
import ResumeUploader from './ResumeUploader'
import { AnalyzerResult } from './AnalyzerResult'
import { useAppDispatch, useAppSelector } from "@/redux/hook";
export const ResumePage = () => {
  
    const { data } = useAppSelector((state)=>(state.resume))

    return (
    <div className='space-y-10'>
        {/* Always Visible */}
        <ResumeUploader/>

        {/* Conditionally visible BELOW uploader */}
        {data && <AnalyzerResult/>}
    </div>
  )
}
