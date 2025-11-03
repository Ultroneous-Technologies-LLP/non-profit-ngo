"use client";

import { FC, useEffect, useState } from "react";

import { Container } from "@/components";
import { BREAKPOINT_XL } from "@/constant";
import { useWindowSize } from "@/hooks";

import { DeskTopUi } from "./DeskTopUi";
import { MobileSlider } from "./MobileSlider";
import { HappyFacesProps } from "./types";

export const HappyFaces: FC<HappyFacesProps> = ({ sections, title }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const isMobile = width < BREAKPOINT_XL;

  return (
    <Container className="relative overflow-hidden pb-21.5 md:pb-22 xl:pb-40">
      <h2 className="font-segoe-regular text-primary-blue z-10 px-4 pb-8 text-center text-[32px]/10 font-semibold md:px-6 xl:px-15 xl:pt-13 xl:pb-15 xl:text-6xl/18.5">
        <span>{title}</span>
      </h2>
      {!isMobile ? <DeskTopUi sections={sections} /> : <MobileSlider sections={sections} />}
    </Container>
  );
};
