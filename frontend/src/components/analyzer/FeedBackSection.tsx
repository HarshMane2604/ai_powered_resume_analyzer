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
      bg: "bg-green-500/10",
      dot: "bg-green-500",
      icon: "text-green-500",
      border: "border-green-500/20",
    },
    red: {
      bg: "bg-red-500/10",
      dot: "bg-red-500",
      icon: "text-red-500",
      border: "border-red-500/20",
    },
    blue: {
      bg: "bg-blue-500/10",
      dot: "bg-blue-500",
      icon: "text-blue-500",
      border: "border-blue-500/20",
    },
  };

  const styles = colorMap[color];

  return (
    <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
      <div className="flex items-center gap-2.5 mb-5">
        <div className={`p-1.5 rounded-lg ${styles.bg}`}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <ul className="space-y-3 flex-1 overflow-y-auto min-h-0 pr-2 custom-scrollbar">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${styles.dot}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
