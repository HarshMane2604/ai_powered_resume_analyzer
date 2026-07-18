import React from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react';

interface SkillSectionProps {
    detectedSkills: string[];
    missingKeywords: string[];
}

export const SkillSection = ({detectedSkills, missingKeywords}:SkillSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 h-full">
        {/* Detected Skills */}
        <div className='bg-white dark:bg-[#09090b] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 h-full'>
            <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500"/>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider'>Detected Skills</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
                {detectedSkills.length > 0 && detectedSkills.map((skills, index)=>(
                    <span
                        key={index}
                        className='px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700'
                    >
                        {skills}
                    </span>
                ))}
            </div>
        </div>

        {/* Missing Keywords */}
        <div className='bg-white dark:bg-[#09090b] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 h-full'>
            <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-500"/>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider'>Recommended Keywords</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
                {missingKeywords.map((keyword, index) => (
                    <span
                        key={index}
                        className='px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded text-xs font-medium border border-orange-200 dark:border-orange-800/50'
                    >
                        {keyword}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}
