import { SVGProps } from "react";

export const Cross = ({ width = 26, height = 26, ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    aria-label="Customer-Centric"
    {...svgProps}
  >
    <path
      d="M1 1L25 25M1 25L25 1"
      stroke="#ECECE2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
