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
        <div className="bg-white dark:bg-[#09090b] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">{title}</h3>
            <div className="flex items-center gap-6">
                <div>
                    <CircularProgress score={score} color={color} />
                </div>
                <div className="flex-1">
                    <div className={`text-xl font-bold mb-1 ${scoreLabel.color}`}>
                        {scoreLabel.text}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{description}</p>
                </div>
            </div>
        </div>
    )
}
