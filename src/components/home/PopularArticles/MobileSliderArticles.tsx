"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState, ChangeEvent } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SLIDER_CLASS, SLIDER_SETTINGS, STARTING_INDEX } from "./constant";
import { PopularArticlesProps } from "./type";

export const MobileSliderArticles: FC<PopularArticlesProps> = ({ mainArticle, sideArticles }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(STARTING_INDEX);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value);
    setCurrentIndex(value);
    swiperRef.current?.slideTo(value);
  };

  const handleSlideChange = (swiper: SwiperType): void => {
    setCurrentIndex(swiper.activeIndex);
  };

  const allArticles = [mainArticle, ...sideArticles];

  return (
    <div className={clsx("z-10 pl-4 md:px-6 xl:hidden xl:px-15", SLIDER_CLASS)}>
      <Swiper
        {...SLIDER_SETTINGS}
        className="z-10"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {allArticles.map(({ alt, category, description, image, title, date, id }) => (
          <SwiperSlide key={id}>
            <div>
              <Image
                alt={alt}
                className="h-35 w-full rounded-2xl"
                height={150}
                src={image}
                width={250}
              />
            </div>
            <div className="font-segoe-regular flex justify-between pt-4 pb-1 text-xs/4 font-semibold">
              <h3>
                <span>{category}</span>
              </h3>
              {date && (
                <p className="text-[#8D8D8D]">
                  <span>{date}</span>
                </p>
              )}
            </div>
            <h4 className="font-segoe-regular pb-1 text-xs/4 font-semibold">
              <span>{title}</span>
            </h4>
            <p className="font-segoe-regular line-clamp-3 text-xs/4.5 text-ellipsis text-[#8D8D8D]">
              <span>{description}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex justify-center">
        <input
          className="[&::-webkit-slider-thumb]:bg-primary-blue h-0.5! w-full max-w-30 cursor-pointer appearance-none rounded-full 
            bg-[#8D8D8D] transition-all duration-500
            [&::-webkit-slider-thumb]:h-1.5! [&::-webkit-slider-thumb]:w-4! [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
          max="4"
          min="0"
          onChange={handleRangeChange}
          step="1"
          type="range"
          value={currentIndex}
        />
      </div>
    </div>
  );
};
