'use client'
import React, { useState, useEffect } from 'react'
import ResumeUploader from './ResumeUploader'
import { AnalyzerResult } from './AnalyzerResult'
import { useAppSelector } from "@/redux/hooks";
import { ChevronRight } from 'lucide-react';

export const ResumePage = () => {
    const { data } = useAppSelector((state)=>(state.resume))
    const [activeView, setActiveView] = useState<'uploader' | 'result'>('uploader')

    useEffect(() => {
        if (data) {
            setActiveView('result')
        } else {
            setActiveView('uploader')
        }
    }, [data])

    return (
    <div className='min-h-screen pt-24'>
        {data && (
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
                <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <button 
                      onClick={() => setActiveView('uploader')}
                      className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeView === 'uploader' ? 'text-blue-600 dark:text-blue-400' : ''}`}
                    >
                      Upload Resume
                    </button>
                    <ChevronRight className="w-4 h-4" />
                    <button 
                      onClick={() => setActiveView('result')}
                      className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeView === 'result' ? 'text-blue-600 dark:text-blue-400' : ''}`}
                    >
                      Analysis Result
                    </button>
                </nav>
            </div>
        )}
        
        <div>
            { activeView === 'result' && data ? <AnalyzerResult /> : <ResumeUploader /> }
        </div>
    </div>
  )
}
