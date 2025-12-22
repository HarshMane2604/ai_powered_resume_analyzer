'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {error.message || 'Something went wrong!'}
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
