import React from 'react'
import { useTheme } from '@/context/themeContext'
import { Moon, Sun } from 'lucide-react';
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-blue-600 transition-colors shadow-sm duration-300"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-white font-bold" />
                ) : (
                    <Sun className="w-5 h-5 text-white font-bold" />
                )}
            </button>
        </>
    )
}
