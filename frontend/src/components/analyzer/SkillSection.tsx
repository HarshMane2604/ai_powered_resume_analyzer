import React from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react';

interface SkillSectionProps {
    detectedSkills: string[];
    missingKeywords: string[];
}

export const SkillSection = ({detectedSkills, missingKeywords}:SkillSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Detected Skills */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-gray-100 dark:border-gray-700 transition-colors'>
            <div>
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400"/>
                <h3 className='text-gray-900 dark:text-white'>Detected Skills</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
                {detectedSkills.length > 0  && detectedSkills.map((skills, index)=>(
                    <span
                        key={index}
                        className='px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm border border-green-200 dark:border-green-800'
                    >
                        {skills}
                    </span>
                ))}
            </div>
        </div>

        {/* Missing Keyword */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h3 className="text-gray-900 dark:text-white">Recommended Keywords</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {missingKeywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-sm border border-orange-200 dark:border-orange-800"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
