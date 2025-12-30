'use client';

import { useAppSelector } from "@/redux/hook";

export const AnalyzerResult = () => {
  const data = useAppSelector((state) => state.resume.data);

  if (!data) return null;
  console.log('Full data object:', data);
  console.log('ATS Score:', data.ats_score);
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        ATS Score: {data.ats_score}
        
      </h2>


        

      {/* Same for weaknesses, skills, suggestions */}
    </div>
  );
};
