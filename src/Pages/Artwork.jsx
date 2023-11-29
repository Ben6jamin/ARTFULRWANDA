// Artwork.jsx

import React from 'react';

const Artwork = () => {
  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      {/* Placeholder for the artwork image */}
      <div className="w-full h-64 bg-gray-300 mb-4 rounded-md"></div>

      {/* Like and Comment icons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* Like icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21l-1.354-1.353A8.966 8.966 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8a8.966 8.966 0 0 1-6.646 8.653L12 21z"
            ></path>
          </svg>
          {/* Like count */}
          <span className="text-gray-600">Likes: 42</span>
        </div>

        <div className="flex items-center">
          {/* Comment icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19s-4 1-4-4 5-12 12-12 4 8 4 8-1.5 6-8 6z"
            ></path>
            <circle
              cx="12"
              cy="10"
              r="3"
              className="text-green-500 fill-current"
            ></circle>
          </svg>
          {/* Comment count */}
          <span className="text-gray-600">Comments: 10</span>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
