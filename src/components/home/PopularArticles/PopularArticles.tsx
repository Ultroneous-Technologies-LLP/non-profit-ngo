"use client";

import { FC } from "react";
import Image from "next/image";

import { useWindowSize } from "@/hooks";
import { Container } from "@/components";
import { BREAKPOINT_XL } from "@/constant";

import { PopularArticlesProps } from "./type";
import { DesktopArticles } from "./DesktopArticles";
import { MobileSliderArticles } from "./MobileSliderArticles";

export const PopularArticles: FC<PopularArticlesProps> = ({
  mainArticle,
  sideArticles,
  title,
  backgroundImage,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINT_XL;

  return (
    <Container className="pb-21.5 md:pb-22 xl:pb-40 relative overflow-hidden">
      <h2 className="z-10 font-segoe-regular font-semibold text-[32px]/10 xl:text-6xl/18.5 text-primary-blue pb-8 xl:pt-18 xl:pb-18.5 text-center px-4 md:px-6 xl:px-15">
        <span>{title}</span>
      </h2>
      {!isMobile ? (
        <DesktopArticles
          mainArticle={mainArticle}
          sideArticles={sideArticles}
        />
      ) : (
        <MobileSliderArticles
          mainArticle={mainArticle}
          sideArticles={sideArticles}
        />
      )}
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="absolute h-135! xl:w-full! md:h-full! z-0 top-8.5! md:top-0! xl:left-11!"
        />
      )}
    </Container>
  );
};
