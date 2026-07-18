'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Users, Award } from 'lucide-react';

const StatCard = ({ icon, value, label, delay }: { icon: React.ReactNode, value: string, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-6 bg-white dark:bg-[#0f0f0f] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-black/50"
  >
    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl mb-4">
      {icon}
    </div>
    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">{label}</div>
  </motion.div>
);

const ResultsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Real Results, Real Fast
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            See how our AI transforms standard resumes into top-tier candidate profiles that get noticed by recruiters and seamlessly pass Applicant Tracking Systems.
          </motion.p>
        </div>

        {/* Before / After Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-12">
            {/* Before Card */}
            <div className="w-full md:w-5/12 bg-gray-50 dark:bg-[#0f0f0f] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative grayscale-[50%] opacity-70">
              <div className="absolute top-4 right-4 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-3 py-1 rounded-full">Score: 42/100</div>
              <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div className="w-full">
                      <div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex shrink-0 items-center justify-center w-14 h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg z-10">
              <ArrowRight className="w-6 h-6" />
            </div>
            {/* Mobile Arrow */}
            <div className="flex md:hidden shrink-0 items-center justify-center w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg z-10 rotate-90">
              <ArrowRight className="w-5 h-5" />
            </div>

            {/* After Card */}
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full md:w-5/12 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-900/50 shadow-2xl relative cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl"></div>
              <motion.div 
                animate={{ scale: isHovered ? 1.05 : 1 }}
                className="absolute top-4 right-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
              >
                Score: 98/100
              </motion.div>
              <div className="w-32 h-4 bg-gray-900 dark:bg-white rounded mb-8"></div>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div className="w-full">
                      <div className="w-5/6 h-3 bg-gray-800 dark:bg-gray-200 rounded mb-3"></div>
                      <div className="w-full h-2 bg-gray-400 dark:bg-gray-600 rounded mb-2"></div>
                      <div className="w-4/5 h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard 
            delay={0.2}
            icon={<TrendingUp className="w-6 h-6" />} 
            value="3x" 
            label="More Interview Invites" 
          />
          <StatCard 
            delay={0.3}
            icon={<Users className="w-6 h-6" />} 
            value="10,000+" 
            label="Resumes Optimized" 
          />
          <StatCard 
            delay={0.4}
            icon={<Award className="w-6 h-6" />} 
            value="98%" 
            label="ATS Pass Rate" 
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
