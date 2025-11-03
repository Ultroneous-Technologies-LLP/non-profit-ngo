"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { Container, PopularArticlesProps } from "@/components";
import { BREAKPOINT_XL } from "@/constant";
import { useWindowSize } from "@/hooks";

import { DesktopArticles } from "./DesktopArticles";
import { MobileSliderArticles } from "./MobileSliderArticles";

export const PopularArticles: FC<PopularArticlesProps> = ({
  mainArticle,
  sideArticles,
  title,
  backgroundImage,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { width } = useWindowSize();

  // TODO: Research and try to remove useEffect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const isMobile = width < BREAKPOINT_XL;

  return (
    <Container className="relative overflow-hidden pb-21.5 md:pb-22 xl:pb-40">
      <h2 className="font-segoe-regular text-primary-blue text-32px/10 z-10 px-4 pb-8 text-center font-semibold md:px-6 xl:px-15 xl:pt-18 xl:pb-18.5 xl:text-6xl/18.5">
        <span>{title}</span>
      </h2>
      {!isMobile ? (
        <DesktopArticles mainArticle={mainArticle} sideArticles={sideArticles} />
      ) : (
        <MobileSliderArticles mainArticle={mainArticle} sideArticles={sideArticles} />
      )}
      {backgroundImage && (
        <Image
          alt={backgroundImage.alt}
          className="absolute top-8.5! z-0 h-135! md:top-0! md:h-full! xl:left-11! xl:w-full!"
          fill
          src={backgroundImage.src}
        />
      )}
    </Container>
  );
};
