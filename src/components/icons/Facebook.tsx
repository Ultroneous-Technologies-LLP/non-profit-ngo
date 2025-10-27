import { SVGProps } from "react";

export const Facebook = ({
  width = 10,
  height = 15,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        d="M2.75181 14.6744L2.73093 8.25434H0V5.50289H2.73093V3.66859C2.73093 1.19303 4.25253 0 6.44444 0C7.49439 0 8.39677 0.0787556 8.65974 0.113956V2.70107L7.13954 2.70176C5.94746 2.70176 5.71664 3.27248 5.71664 4.10996V5.50289H9.10312L8.1928 8.25434H5.71663V14.6744H2.75181Z"
        fill="currentColor"
      />
    </svg>
  );
};
