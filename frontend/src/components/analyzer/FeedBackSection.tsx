import React, { ReactNode } from "react";

interface FeedBackSectionProps {
  title: string;
  items: string[];
  icon: ReactNode;
  color: "green" | "red" | "blue";
}

export const FeedBackSection = ({
  title,
  items,
  icon,
  color,
}: FeedBackSectionProps) => {
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
  };

  const styles = colorMap[color];

  return (
    <div className="bg-white dark:bg-[#09090b] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 h-full">
      <div className="flex items-center gap-2 mb-6">
        <span className={styles.icon}>{icon}</span>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${styles.dot}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
