"use client";

import { useEffect, useState } from "react";

export default function ProgressCircle({ percent = 45 }) {
  const [offset, setOffset] = useState(0);
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = circumference - (circumference * percent) / 100;
    setOffset(progressOffset);
  }, [percent, circumference]);

  return (
    <div className="relative size-20 flex items-center justify-center">
      <svg className="w-full h-full transform rotate-90">
        <circle
          className="text-primary-blue transition-all duration-700 ease-in-out"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
      </svg>
      <div className="absolute left-3.5 top-[13px] size-13.5 flex items-center justify-center bg-primary-yellow rounded-full text-lg/4.5 text-primary-blue font-segoe-regular font-semibold">
        {percent}%
      </div>
    </div>
  );
}
