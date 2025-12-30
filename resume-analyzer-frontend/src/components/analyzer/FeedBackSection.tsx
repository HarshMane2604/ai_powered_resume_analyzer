import React, { ReactNode } from 'react'

interface FeedBackSectionProps {
  title: String;
  items: String[];
  icon: ReactNode;
  color: "green" | "red" | "blue";
}

export const FeedBackSection = ({ title, items, icon, color }: FeedBackSectionProps) => {

  const colorMap = {
    green: {
      bg: "bg-green-100 dark:bg-green-900/40",
      dot: "bg-green-600 dark:bg-green-400",
      icon: "text-green-600 dark:text-green-400",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900/40",
      dot: "bg-red-600 dark:bg-red-400",
      icon: "text-red-600 dark:text-red-400",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/40",
      dot: "bg-blue-600 dark:bg-blue-400",
      icon: "text-blue-600 dark:text-blue-400",
    },
  }

  const styles = colorMap[color]

  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl shadown-lg p-6 border bordger-gray-100 dark:border-gray-700'>
      <div className='flex items-center gap-2 mb-4'>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className='text-gray-900 dark:text-white'>{title}</h3>

      <ul className='space-y-3'>

        {items.map((item, index) => (
          <li
            key={index}
            className='flex item-start gap-2 text-gray-700 dark:text-gray-300 text-sm'
          >
            <div
              className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${styles.dot}`}
            />
            <span>{item}</span>
          </li>
        ))}

      </ul>
    </div>
  )
}
