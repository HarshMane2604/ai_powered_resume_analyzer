"use client";
import { useAppSelector } from "@/redux/hooks";
import { ScoreCard } from "./ScoreCard";
import { FeedBackSection } from "./FeedBackSection";
import {
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Sparkles,
} from "lucide-react";

export const AnalyzerResult = () => {
  const data = useAppSelector((state) => state.resume.data);

  if (!data) return null;

  const hasJd = !!data.jd_match_score;

  return (
    <div className="w-full max-w-7xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      {/* ===== BENTO GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* ── Hero Tile (Row 1) ── */}
        <div className={`md:col-span-2 ${hasJd ? "lg:col-span-6" : "lg:col-span-8"} lg:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 rounded-2xl p-8 flex flex-col justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1`}>
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 opacity-80" />
            <span className="text-sm font-medium uppercase tracking-widest opacity-70">
              Analysis Complete
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2">
            Resume Report
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed max-w-md">
            Your resume has been analyzed against industry standards for
            content, formatting, keyword optimization and ATS compatibility.
          </p>
        </div>

        {/* ── Overall Score (Row 1) ── */}
        <div className={hasJd ? "lg:col-span-2" : "lg:col-span-4"}>
          <ScoreCard
            title="Overall Score"
            score={data.overall_score}
            description="Content, formatting & keywords"
            color="blue"
          />
        </div>

        {/* ── ATS Score (Row 1) ── */}
        {hasJd && (
          <div className={hasJd ? "lg:col-span-2" : "lg:col-span-3"}>
            <ScoreCard
              title="ATS Match"
              score={data.ats_score}
              description="ATS parsability"
              color="purple"
            />
          </div>
        )}

        {/* ── Jd Matching Score (Row 1) ── */}
        {hasJd && (
          <div className="lg:col-span-2">
            <ScoreCard
              title="Job Match"
              score={data.jd_match_score!}
              description="Match against job description"
              color="blue"
            />
          </div>
        )}

        {/* ── Section Breakdown (Row 2) ── */}
        <div className="md:col-span-2 lg:col-span-8 bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-8">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Section Breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
            {Object.entries(data.section_scores).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace("_", " ")}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">
                    {value}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Strengths (Row 2 & 3) ── */}
        <div className="lg:col-span-4 lg:row-span-2 relative min-h-[400px] lg:min-h-0">
          <div className="lg:absolute lg:inset-0 h-full">
            <FeedBackSection
              title="Strengths"
              items={data.strengths}
              icon={<ThumbsUp className="w-5 h-5" />}
              color="green"
            />
          </div>
        </div>

        {/* ── Detected Skills (Row 3) ── */}
        <div className="md:col-span-1 lg:col-span-4 bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Detected Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
            {data.skills.length > 0 &&
              data.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-xs font-medium border border-green-200/60 dark:border-green-800/40"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>

        {/* ── Missing JD Keywords (Row 3) ── */}
        {hasJd && data.missing_keywords && data.missing_keywords.length > 0 && (
          <div className="lg:col-span-4 bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-5">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Missing from JD
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
              {data.missing_keywords.map((keyword: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-red-50 dark:bg-red-900/15 text-red-700 dark:text-red-400 rounded-lg text-xs font-medium border border-red-200/60 dark:border-red-800/40"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Recommended Keywords (Row 3 or 4) ── */}
        <div className="lg:col-span-4 bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-5">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Add These Keywords
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
            {(data.recommended_skills || []).map(
              (keyword: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/15 text-orange-700 dark:text-orange-400 rounded-lg text-xs font-medium border border-orange-200/60 dark:border-orange-800/40"
                >
                  {keyword}
                </span>
              ),
            )}
          </div>
        </div>

        {/* ── Weaknesses (Row 4) ── */}
        <div
          className={
            hasJd
              ? "md:col-span-1 lg:col-span-4 h-[350px]"
              : "md:col-span-1 lg:col-span-6 h-[350px]"
          }
        >
          <FeedBackSection
            title="Weaknesses"
            items={data.weaknesses}
            icon={<ThumbsDown className="w-5 h-5" />}
            color="red"
          />
        </div>

        {/* ── Suggestions (Row 4) ── */}
        <div
          className={
            hasJd
              ? "md:col-span-1 lg:col-span-4 h-[350px]"
              : "md:col-span-1 lg:col-span-6 h-[350px]"
          }
        >
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
