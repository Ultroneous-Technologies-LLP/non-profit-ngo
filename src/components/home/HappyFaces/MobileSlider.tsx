"use client";

import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { SLIDER_SETTINGS } from "./constant";
import { HappyFacesProps } from "./types";

import "swiper/css";

export const MobileSlider: FC<HappyFacesProps> = ({ sections }) => (
  <div>
    <Swiper {...SLIDER_SETTINGS}>
      {sections.map(({ id, images, spaceY }) => (
        <SwiperSlide key={id}>
          <div className={spaceY}>
            {images.map(({ alt, height, src, width }) => (
              <Image alt={alt} height={height} key={src} src={src} width={width} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
