'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      {/* CTA Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-900/80 px-8 py-20 shadow-2xl sm:px-16 md:py-24 text-center border border-gray-800"
        >
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg leading-8 text-gray-300 mb-10">
              Join leading professionals who have optimized their resumes and successfully landed their dream roles at top companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/analyze" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-3.5 font-medium text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span className="mr-2 text-sm font-semibold">Start Free Analysis</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            © 2026 AI Resume Analyzer. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CtaSection;