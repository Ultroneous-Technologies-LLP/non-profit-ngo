import { BREAK_POINT_MD } from "@/constant";

export const SLIDER_CLASS =
  "[&_.swiper]:!overflow-hidden [&_.swiper]:!relative [&_.swiper]:!w-full [&_.swiper]:!h-full [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!transition-transform [&_.swiper-wrapper]:!box-content [&_.swiper-wrapper]:!will-change-transform [&_.swiper-slide]:w-full [&_.swiper-slide]:h-auto [&_.swiper-slide]:relative [&_.swiper-slide]:block [&_.swiper-slide]:shrink-0 [&_.swiper-wrapper]:ease-in-out [&_.swiper-slide-active]:!transition-all [&_.swiper-slide-active]:!duration-500 [&_.swiper-slide-active]:!ease-in-out";

export const SLIDER_SETTINGS = {
  spaceBetween: 24,
  slidesPerView: 1.5,
  breakpoints: {
    [BREAK_POINT_MD]: { slidesPerView: 2.5 },
  },
};

export const STARTING_INDEX = 0;
