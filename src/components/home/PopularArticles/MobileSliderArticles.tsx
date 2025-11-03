"use client";

import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FC, useRef, useState, ChangeEvent } from "react";

import { PopularArticlesProps } from "./type";
import { SLIDER_CLASS, SLIDER_SETTINGS } from "./constant";

export const MobileSliderArticles: FC<PopularArticlesProps> = ({
  mainArticle,
  sideArticles,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentIndex(value);
    swiperRef.current?.slideTo(value);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const allArticles = [mainArticle, ...sideArticles];

  return (
    <div className={clsx("pl-4 md:px-6 xl:px-15 xl:hidden z-10", SLIDER_CLASS)}>
      <Swiper
        {...SLIDER_SETTINGS}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="z-10"
      >
        {allArticles.map(
          ({ alt, category, description, image, title, date, id }) => (
            <SwiperSlide key={id}>
              <div>
                <Image
                  src={image}
                  alt={alt}
                  width={250}
                  height={150}
                  className="rounded-2xl w-full h-35"
                />
              </div>
              <div className="flex justify-between pt-4 pb-1 font-segoe-regular font-semibold text-xs/4">
                <h3>
                  <span>{category}</span>
                </h3>
                {date && (
                  <p className="text-[#8D8D8D]">
                    <span>{date}</span>
                  </p>
                )}
              </div>
              <h4 className="font-segoe-regular font-semibold text-xs/4 pb-1">
                <span>{title}</span>
              </h4>
              <p className="font-segoe-regular text-xs/4.5 text-[#8D8D8D] line-clamp-3 text-ellipsis">
                <span>{description}</span>
              </p>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="flex justify-center mt-8">
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={currentIndex}
          onChange={handleRangeChange}
          className="w-full max-w-30 !h-0.5 appearance-none rounded-full bg-[#8D8D8D] cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:!w-4 [&::-webkit-slider-thumb]:!h-1.5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-blue transition-all duration-500"
        />
      </div>
    </div>
  );
};
