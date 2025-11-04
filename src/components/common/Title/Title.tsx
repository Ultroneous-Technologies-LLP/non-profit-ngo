import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ text, isMainTitle = false, className = "" }) => {
  const baseClasses = "z-10 font-segoe-regular text-primary-blue font-semibold xl:text-6xl/18.5";

  const combined = clsx(baseClasses, className);

  if (isMainTitle) {
    return (
      <h1 className="font-segoe-regular text-primary-blue pb-6 text-5xl/14 font-semibold xl:pb-9 xl:text-[81px]/21.5">
        <span>{text}</span>
      </h1>
    );
  }

  return (
    <h2 className={combined}>
      <span>{text}</span>
    </h2>
  );
};
