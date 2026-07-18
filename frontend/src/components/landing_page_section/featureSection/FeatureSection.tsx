'use client';
import React from 'react';
import { FileText, CheckCircle, Zap, Target, Star, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const FeatureSection = () => {
  return (
    <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-24 bg-gray-50/50 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Everything You Need to Stand Out
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Our enterprise-grade AI provides comprehensive insights to help you craft a winning resume tailored for modern Applicant Tracking Systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            index={0}
            icon={<Target className="w-6 h-6" />}
            title="ATS Optimization"
            description="Ensure your resume passes Applicant Tracking Systems with our advanced compatibility scoring and formatting checks."
          />
          <FeatureCard
            index={1}
            icon={<Zap className="w-6 h-6" />}
            title="Instant Analysis"
            description="Get comprehensive feedback in seconds. Our AI evaluates your entire profile instantly, saving you valuable time."
          />
          <FeatureCard
            index={2}
            icon={<CheckCircle className="w-6 h-6" />}
            title="Keyword Detection"
            description="Discover crucial industry keywords you're missing. Align your skills precisely with the job description."
          />
          <FeatureCard
            index={3}
            icon={<FileText className="w-6 h-6" />}
            title="Section Breakdown"
            description="Receive detailed scores for every section of your resume to identify weak spots and areas for immediate improvement."
          />
          <FeatureCard
            index={4}
            icon={<Star className="w-6 h-6" />}
            title="Smart Suggestions"
            description="Get actionable, AI-generated recommendations to enhance your impact and phrasing."
          />
          <FeatureCard
            index={5}
            icon={<Layers className="w-6 h-6" />}
            title="Multiple Formats"
            description="Seamless support for PDF, DOCX, and TXT files, ensuring maximum flexibility and compatibility."
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;