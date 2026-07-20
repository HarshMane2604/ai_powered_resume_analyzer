"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const HeaderSection = () => {
  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Generation Resume Analysis
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white"
        >
          Optimize Your Resume for{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Applicant Tracking Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-400"
        >
          Instantly evaluate your resume against industry standards. Discover
          missing keywords, optimize formatting, and increase your chances of
          landing an interview.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="/analyze" className="w-full sm:w-auto">
            <button className="w-full cursor-pointer sm:w-auto rounded-lg bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-md hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200">
              Analyze Resume Now
            </button>
          </Link>
          <Link href="/sample-report" className="w-full sm:w-auto">
            <button className="w-full cursor-pointer sm:w-auto rounded-lg bg-white dark:bg-[#0a0a0a] px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200">
              View Sample Report
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderSection;
