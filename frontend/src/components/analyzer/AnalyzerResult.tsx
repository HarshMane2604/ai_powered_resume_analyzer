"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { ScoreCard } from "./ScoreCard";
import { FeedBackSection } from "./FeedBackSection";
import { SkillSection } from "./SkillSection";
import { ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react";
export const AnalyzerResult = () => {
  const data = useAppSelector((state) => state.resume.data);

  if (!data) return null;

  return (
    <div className="w-full max-w-6xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-5  pb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          Resume Analysis Report
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Detailed breakdown of your resume's performance against industry
          standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ScoreCard
          title="Overall Score"
          score={data.overall_score}
          description="Content, formatting, and keyword optimization"
          color="blue"
        />
        <ScoreCard
          title="ATS Compatibility"
          score={data.ats_score}
          description="Applicant Tracking Systems parsability"
          color="purple"
        />
      </div>

      <div className="bg-white dark:bg-[#09090b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
          Section Breakdown
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(data.section_scores).map(([key, value]) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {key.replace("_", " ")}
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {value}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <SkillSection
          detectedSkills={data.skills}
          missingKeywords={data.recommended_skills || []}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FeedBackSection
          title="Strengths"
          items={data.strengths}
          icon={<ThumbsUp className="w-5 h-5" />}
          color="green"
        />
        <FeedBackSection
          title="Weaknesses"
          items={data.weaknesses}
          icon={<ThumbsDown className="w-5 h-5" />}
          color="red"
        />
        <FeedBackSection
          title="Suggestions"
          items={data.suggestions}
          icon={<Lightbulb className="w-5 h-5" />}
          color="blue"
        />
      </div>
    </div>
  );
};
