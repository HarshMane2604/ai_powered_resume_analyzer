"use client";
import { useState, useRef } from "react";
import {
  Upload,
  FileText,
  Loader2,
  Sparkles,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react";
import { analyzeResume } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import {
  analysisSuccess,
  analysisFailure,
  startAnalysis,
} from "@/redux/sclices/resumeSlice";

interface ResumeUploadProps {
  onAnalyze?: (file: File) => void;
  isAnalyzing?: boolean;
}

export function ResumeUploader({
  onAnalyze,
  isAnalyzing: isAnalyzingProp,
}: ResumeUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state: RootState) => state.resume);
  const resumeData = useAppSelector((state: RootState) => state.resume.data);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "text/plain"
      ) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyzeClick = async () => {
    if (selectedFile) {
      dispatch(startAnalysis()); // Dispatch start action

      try {
        const result = await analyzeResume(selectedFile);
        dispatch(analysisSuccess(result)); // Dispatch success with data
        onAnalyze?.(selectedFile);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to analyze resume";
        dispatch(analysisFailure(errorMessage));
        console.error("Analysis error:", err);
      }
    }
  };
  console.log("Resume data from Redux:", resumeData);

  return (
    <div className="w-full max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Analyze Your Resume
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Upload your resume to get instant, actionable feedback powered by
          advanced AI. Ensure you match industry standards and land more
          interviews.
        </p>
      </div>

      <div className="bg-white dark:bg-[#09090b] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-10">
        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
            dragActive
              ? "border-blue-500 bg-blue-50 dark:bg-blue-500/10"
              : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            disabled={loading}
          />

          <div className="flex flex-col items-center justify-center gap-4">
            {!selectedFile ? (
              <>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Upload className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    PDF, DOC, DOCX up to 5MB
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-full">
                  <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                    Ready to analyze • {(selectedFile.size / 1024).toFixed(2)}{" "}
                    KB
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Analyze Button */}
        {selectedFile && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAnalyzeClick}
              disabled={loading}
              className="flex-1 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Analyze Resume
                </>
              )}
            </button>
            <button
              onClick={() => setSelectedFile(null)}
              disabled={loading}
              className="px-6 py-3 rounded-lg font-medium border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 text-sm"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg flex items-start gap-3">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
            <p className="text-red-800 dark:text-red-400 font-medium text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Features Grid */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider">
            What you'll receive
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Target className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  ATS Match Score
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  See how well your resume parses in standard Applicant Tracking
                  Systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Keyword Analysis
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Identify critical industry keywords you might be missing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Zap className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Strengths & Weaknesses
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Detailed breakdown of what makes you stand out to recruiters.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Sparkles className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Actionable Suggestions
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Direct advice and examples on how to improve your bullet
                  points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeUploader;
