'use client'
import React from 'react'

const ctaSection = () => {
  return (
    <>
        {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-white mb-4">
            Ready to Boost Your Career?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved
            their resumes and landed their dream jobs
          </p>
          <button
            onClick={() => {}}    
            className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Free
          </button>
        </div>
        
      </section>
        <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          © 2025 AI Resume Analyzer. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default ctaSection