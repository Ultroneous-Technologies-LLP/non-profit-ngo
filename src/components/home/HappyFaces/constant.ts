import { BREAK_POINT_MD } from "@/constant";

export const SLIDER_SETTINGS = {
  centeredSlides: true,
  centerInsufficientSlides: true,
  loop: true,
  slidesPerView: 2.4,
  spaceBetween: 24,
  breakpoints: {
    [BREAK_POINT_MD]: { slidesPerView: 3.5, spaceBetween: 24, centeredSlides: true },
  },
};

export const SLICE_START = 0;
export const SLICE_END = 5;
