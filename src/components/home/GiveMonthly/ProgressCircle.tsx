"use client";

import { FC, useEffect, useState } from "react";

import {
  CIRCUMFERENCE_MULTIPLIER,
  DEFAULT_PERCENT,
  INITIAL_OFFSET,
  PERCENT_DIVISOR,
  RADIUS,
} from "./constant";
import { ProgressCircleProps } from "./types";

export const ProgressCircle: FC<ProgressCircleProps> = ({ percent = DEFAULT_PERCENT }) => {
  const [offset, setOffset] = useState<number>(INITIAL_OFFSET);

  const circumference = CIRCUMFERENCE_MULTIPLIER * Math.PI * RADIUS;

  useEffect(() => {
    const progressOffset = circumference - (circumference * percent) / PERCENT_DIVISOR;
    setOffset(progressOffset);
  }, [percent, circumference]);

  return (
    <div className="relative flex size-20 items-center justify-center">
      <svg className="h-full w-full rotate-90 transform">
        <circle
          className="text-primary-blue transition-all duration-700 ease-in-out"
          cx="40"
          cy="40"
          fill="transparent"
          r={RADIUS}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth="5"
        />
      </svg>
      <div className="bg-primary-yellow text-primary-blue font-segoe-regular absolute top-[13px] left-3.5 flex size-13.5 items-center justify-center rounded-full text-lg/4.5 font-semibold">
        {percent}%
      </div>
    </div>
  );
};
