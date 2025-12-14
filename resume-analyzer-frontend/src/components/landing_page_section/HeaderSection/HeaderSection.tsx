import React from 'react'

const HeaderSection = () => {
  return (
    <>
        <div className="relative flex lg:min-h-screen min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white via-white-50 to-purple-50 dark:from-black dark:via-gray-950 dark:to-gray-900">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="w-full">
            <h2 className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
              AI Powered Resume Analyzer  
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-sm sm:text-base text-neutral-800 dark:text-neutral-500">
              Hover over the boxes above and click.To be used on backgrounds of
              hero sections OR Call to Action sections. I beg you don&apos;t use
              it everywhere.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <button
              className="relative z-10 mt-8 sm:mt-10 w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Analyze Resume
            </button>

            <button
              className="relative z-10 mt-4 sm:mt-10 w-full sm:w-auto rounded-md bg-white border border-gray-200 dark:border-gray-800 px-6 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-colors duration-300 cursor-pointer"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSection