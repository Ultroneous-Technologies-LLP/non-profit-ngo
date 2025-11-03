import { JSX, SVGProps } from "react";

import { ICON_SIZE_26 } from "./constant";

export const Cross = ({
  width = ICON_SIZE_26,
  height = ICON_SIZE_26,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label="Customer-Centric"
    fill="none"
    height={height}
    role="img"
    viewBox={`0 0 ${ICON_SIZE_26} ${ICON_SIZE_26}`}
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
