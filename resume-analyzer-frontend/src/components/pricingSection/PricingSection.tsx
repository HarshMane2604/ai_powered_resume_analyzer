import React from 'react'
import { CheckCircle } from 'lucide-react'; 
const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10 mt-15 container mx-auto px-4 py-20 ">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-gray-900 dark:text-white">$0</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                1 resume analysis per month
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Basic ATS scoring
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                PDF export
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative transform scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-white mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-white">$19</span>
              <span className="text-blue-100">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5 text-white" />
                Unlimited resume analyses
              </li>
              <li className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5 text-white" />
                Advanced ATS optimization
              </li>
              <li className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5 text-white" />
                Keyword suggestions
              </li>
              <li className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5 text-white" />
                Priority support
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-gray-900 dark:text-white">$49</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Team collaboration
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                API access
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Custom integrations
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
  )
}

export default PricingSection