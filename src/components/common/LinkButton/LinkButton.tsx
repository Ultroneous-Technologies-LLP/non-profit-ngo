"use client";

import clsx from "clsx";
import Link from "next/link";
import { JSX } from "react";

import { LinkButtonVariantEnum } from "./enum";
import { LinkButtonProps } from "./types";

export const LinkButton = ({
  href,
  children,
  variant = LinkButtonVariantEnum.PRIMARY_YELLOW,
  className,
  isNormalLink = false,
  onClick,
}: LinkButtonProps): JSX.Element => {
  const baseClasses =
    "z-10 font-segoe-regular inline-block border border-transparent font-semibold text-sm/5 xl:text-lg/6.5 transition-colors duration-500 ease-in-out";

  const variants = {
    primaryBlue:
      "bg-primary-blue text-primary-yellow hover:text-primary-blue hover:border-primary-blue hover:bg-transparent",
    primaryYellow:
      "bg-primary-yellow text-primary-blue hover:text-primary-blue hover:border-primary-blue hover:bg-transparent",
    outlineBlue:
      "border border-primary-blue bg-transparent text-primary-blue hover:text-primary-blue hover:border-primary-blue",
  };

  if (isNormalLink) {
    return (
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonClasses = clsx(baseClasses, variants[`${variant}`], className);

  return (
    <Link className={buttonClasses} href={href} onClick={onClick}>
      {children}
    </Link>
  );
};
