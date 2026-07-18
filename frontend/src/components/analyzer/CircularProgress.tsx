import React from 'react'
interface CircularProgressProps {
    score: number,
    color: 'blue' | 'purple'
}
export const CircularProgress = ({ score, color }: CircularProgressProps) => {
    const radius = 40
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (score / 100) * circumference

    const colorMap = {
        blue: {
            bg: 'stroke-blue-100 dark:stroke-blue-900/40',
            fg: 'stroke-blue-600 dark:stroke-blue-400',
            text: 'text-blue-600 dark:text-blue-400'
        },
        purple: {
            bg: 'stroke-purple-100 dark:stroke-purple-900/40',
            fg: 'stroke-purple-600 dark:stroke-purple-400',
            text: 'text-purple-600 dark:text-purple-400'
        }
    }

    const colors = colorMap[color]
    return (
        <div className='relative'>
            <svg width="100" height="100" className='transform -rotate-90'>
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className={colors.bg}
                    strokeWidth="8"
                    fill='none'
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className={colors.fg}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl ${colors.text}`}>{score}</span>
            </div>
        </div>
    )
}
