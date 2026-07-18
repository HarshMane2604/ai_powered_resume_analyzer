'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager",
    content: "The ATS optimization feature is a game-changer. I realized I was missing crucial keywords that recruiters were looking for. Got 3 interviews in my first week!",
    rating: 5,
    avatar: "S"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Software Engineer",
    content: "I always struggled with phrasing my impact. The smart suggestions helped me rewrite my bullet points to sound much more professional and results-oriented.",
    rating: 5,
    avatar: "D"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "Incredible tool. The instant feedback allowed me to tailor my resume for a specific role in minutes rather than hours. Highly recommend to any job seeker.",
    rating: 5,
    avatar: "E"
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Data Analyst",
    content: "The section breakdown made it so obvious where my resume was failing. After fixing the formatting and adding the suggested skills, my callback rate doubled.",
    rating: 4,
    avatar: "M"
  },
  {
    id: 5,
    name: "Jessica Walsh",
    role: "UX Designer",
    content: "As a designer, I focused too much on visuals and not enough on ATS compatibility. This tool struck the perfect balance for me.",
    rating: 5,
    avatar: "J"
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Sales Executive",
    content: "Simple, fast, and remarkably accurate. It highlighted the exact same issues a professional resume writer pointed out, but for a fraction of the cost.",
    rating: 5,
    avatar: "R"
  }
];

const ReviewCard = ({ review, index }: { review: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-[#0f0f0f] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 mb-6"
  >
    <div className="flex items-center gap-1 mb-6">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
      "{review.content}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-lg border border-blue-200 dark:border-blue-800/50 shadow-inner">
        {review.avatar}
      </div>
      <div>
        <div className="font-bold text-gray-900 dark:text-white">{review.name}</div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{review.role}</div>
      </div>
    </div>
  </motion.div>
);

const ReviewsSection = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-24 bg-gray-50/50 dark:bg-[#050505] overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Don't Just Take Our Word For It
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Thousands of professionals have transformed their careers using our AI analyzer. Join the growing community of successful candidates.
          </motion.p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <ReviewCard review={reviews[0]} index={0} />
            <ReviewCard review={reviews[3]} index={3} />
          </div>
          
          {/* Column 2 (Offset on desktop for a dynamic look) */}
          <div className="flex flex-col gap-2 lg:mt-16">
            <ReviewCard review={reviews[1]} index={1} />
            <ReviewCard review={reviews[4]} index={4} />
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-2 lg:mt-8">
            <ReviewCard review={reviews[2]} index={2} />
            <ReviewCard review={reviews[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
