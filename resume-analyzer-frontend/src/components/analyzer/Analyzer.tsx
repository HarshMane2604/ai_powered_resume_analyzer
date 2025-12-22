'use client';
import { useState, useRef } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";

interface ResumeUploadProps {
  onAnalyze: (file: File) => void;
  isAnalyzing: boolean;
}

export function Analyzer({
  onAnalyze,
  isAnalyzing,
}: ResumeUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(
    null,
  );
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyzeClick = () => {
    if (selectedFile) {
      onAnalyze(selectedFile);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
            dragActive
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
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
            disabled={isAnalyzing}
          />

          {!selectedFile ? (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-2">
                Drag and drop your resume here, or click to
                browse
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Supports PDF, DOCX, and TXT files
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-1">
                {selectedFile.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </>
          )}
        </div>

        {/* Analyze Button */}
        {selectedFile && (
          <div className="mt-6 flex gap-3">
            <button
              onClick={handleAnalyzeClick}
              disabled={isAnalyzing}
              className="flex-1 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing Resume...
                </>
              ) : (
                <>Analyze Resume</>
              )}
            </button>
            <button
              onClick={() => setSelectedFile(null)}
              disabled={isAnalyzing}
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors disabled:opacity-50"
            >
              Clear
            </button>
          </div>
        )}

        {/* Features */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            What you'll get:
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5"></div>
              <span className="text-gray-600 dark:text-gray-300">
                ATS Compatibility Score
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Keyword Analysis
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Strengths & Weaknesses
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Improvement Suggestions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyzer;

