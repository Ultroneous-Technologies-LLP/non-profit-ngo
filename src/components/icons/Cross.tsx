import { JSX, SVGProps } from "react";

export const Cross = ({
  width = 26,
  height = 26,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label="Customer-Centric"
    fill="none"
    height={height}
    role="img"
    viewBox="0 0 26 26"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 1L25 25M1 25L25 1"
      stroke="#ECECE2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
