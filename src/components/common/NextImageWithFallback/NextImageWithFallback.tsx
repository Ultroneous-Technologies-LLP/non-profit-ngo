"use client";

import Image from "next/image";
import { useState, FC } from "react";

import { NextImageWithFallbackProps } from "./types";

const DEFAULT_FALLBACK = "/assets/images/fall-back-image.avif";

export const NextImageWithFallback: FC<NextImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  if (!src) {
    return <Image {...props} alt={alt} src={fallbackSrc || DEFAULT_FALLBACK} />;
  }

  const handleError = (): void => {
    if (imgSrc !== (fallbackSrc || DEFAULT_FALLBACK)) {
      setImgSrc(fallbackSrc || DEFAULT_FALLBACK);
    }
  };

  return <Image {...props} alt={alt} onError={handleError} src={imgSrc} />;
};
