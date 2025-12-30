'use client';

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { ScoreCard } from "./ScoreCard";
import { FeedBackSection } from "./FeedBackSection";
import { SkillSection } from "./SkillSection";
import { ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';
export const AnalyzerResult = () => {
  const data = useAppSelector((state) => state.resume.data);

  if (!data) return null;

  return (
    <div className="pt-20 bg-linear-to-b from-white to bg-blue-50 dark:from-gray-800 to dark:bg-black">
      <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 md:mx-20">
        {/* Overall Score */}
        <ScoreCard
          title="Overall Score"
          score={data.overall_score}
          description="Based on content, formatting, and keyword optimization"
          color="blue"
        />

        {/* ATS Score */}
        <ScoreCard
          title="ATS Compatibility"
          score={data.ats_score}
          description="How well your resume passes Applicant Tracking Systems"
          color="purple"
        />

        {/* Section Breakdown */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors">
          <h2 className="text-gray-900 dark:text-white mb-6">
            Section Breakdown
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.section_scores).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 capitalize">
                    {key}
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {value}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-20 mb-20 space-y-8 lg:p-6">
        {/* Skill Section */}
        <SkillSection detectedSkills={data.skills} missingKeywords={data.recommended_skills || []} />

        {/* Feedback Section */}
        <div className="grid lg:grid-cols-3 gap-6 ">
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
    </div>
  );
};
