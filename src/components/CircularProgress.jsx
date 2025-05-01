import React, { useEffect, useState } from "react";

const CircularProgress = ({ value, label, totalCount }) => {
  const [progress, setProgress] = useState(0); // For animated progress
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress < value) {
        setProgress(progress + 1);
      }
    }, 10); // Animation speed

    return () => clearTimeout(timeout);
  }, [progress, value]);

  const strokeDashoffset = circumference - (progress / totalCount) * circumference;

  return (
    <div className="flex items-center justify-center h-32 bg-gray-100">
      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        {/* Background Circle */}
        <svg className="w-full h-full">
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>

        {/* Progress Circle */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            className="text-indigo-700 transition-[stroke-dashoffset] duration-1000 ease-out"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Centered Percentage */}
       
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-indigo-700">{progress}</span>  
        </div>
        
      </div>
      <p className="text-gray-800 font-bold">{label}</p>
    </div>
  );
};

export default CircularProgress;
