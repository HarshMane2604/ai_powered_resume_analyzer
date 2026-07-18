import React from 'react'
import { CircularProgress } from './CircularProgress'

interface ScoreCardProps {
    title: string,
    score: number,
    color: 'blue' | 'purple'
    description: string
}

export const ScoreCard = ({ title, score, color, description }: ScoreCardProps) => {
    const getScoreLabel = (score: number) => {
        if (score >= 80) return { text: 'Excellent', color: 'text-green-600 dark:text-green-400' };
        if (score >= 60) return { text: 'Good', color: 'text-blue-600 dark:text-blue-400' };
        if (score >= 40) return { text: 'Fair', color: 'text-yellow-600 dark:text-yellow-400' };
        return { text: 'Needs Work', color: 'text-red-600 dark:text-red-400' };
    };

    const scoreLabel = getScoreLabel(score);

    return (
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">{title}</p>
            <div className="mb-4">
                <CircularProgress score={score} color={color} />
            </div>
            <div className={`text-lg font-bold mb-0.5 ${scoreLabel.color}`}>
                {scoreLabel.text}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">{description}</p>
        </div>
    )
}
