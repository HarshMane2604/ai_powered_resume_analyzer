import React from 'react'
import { FileText, CheckCircle, Zap, Target, ArrowRight, Star } from 'lucide-react';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo';
}

function FeatureCard({icon, title, description, color}: FeatureCardProps) {
  const colorMap = {
    blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    green: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400',
    pink: 'bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
  }
  return(
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow duration-300 cursor-pointer">
      <div className={`w-12 h-12 rounded-lg ${colorMap[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  )
}
const FeatureSection = () => {
  return (
    <div>
        {/* Feature section */}
      <section className='w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-linear-to-t from-white via-white to-purple-50 dark:from-black dark:via-gray-800 dark:to-gray-900 transition-colors'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-gray-900 dark:text-white mb-4 text-xl sm:text-2xl md:text-3xl font-semibold'>Everything You Need to Stand Out</h2>
            <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto'>Our AI-powered analyzer provides comprehensive insights to help you create a winning resume</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="ATS Optimization"
            description="Ensure your resume passes Applicant Tracking Systems with our advanced compatibility scoring"
            color="blue"
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Instant Analysis"
            description="Get comprehensive feedback in seconds, not hours. No waiting, no hassle"
            color="purple"
          />
          <FeatureCard
            icon={<CheckCircle className="w-6 h-6" />}
            title="Keyword Detection"
            description="Discover important keywords you're missing and skills you should highlight"
            color="green"
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="Section Breakdown"
            description="Get detailed scores for every section of your resume to identify weak spots"
            color="orange"
          />
          <FeatureCard
            icon={<Star className="w-6 h-6" />}
            title="Smart Suggestions"
            description="Receive actionable recommendations to improve your resume's impact"
            color="pink"
          />
          <FeatureCard
            icon={<CheckCircle className="w-6 h-6" />}
            title="Multiple Formats"
            description="Support for PDF, DOCX, and TXT file formats for maximum flexibility"
            color="indigo"
          />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeatureSection