import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, UpRightArrow } from "@/components";

import { GiveMonthlyProps } from "./types";
import ProgressCircle from "./ProgressCircle";

export const GiveMonthly: FC<GiveMonthlyProps> = ({
  description,
  missions,
  title,
  viewMore,
  backgroundImage,
}) => {
  return (
    <Container
      backgroundClassName="pb-25 xl:pb-40 px-4 md:px-6 xl:px-15"
      className=" relative overflow-hidden"
    >
      <div className="z-10 pt-4 md:pt-3 xl:pt-8">
        <h2 className="font-segoe-regular font-semibold text-[32px]/10 xl:text-6xl/20 text-primary-blue text-center pb-2 xl:pb-2.5">
          <span>{title}</span>
        </h2>
        <p className="font-segoe-regular text-xs/4.5 xl:text-base/6 text-center pb-8 xl:pb-17 max-w-205 w-full mx-auto">
          <span>{description}</span>
        </p>
      </div>
      <div className="z-10 flex flex-col md:flex-row justify-center md:justify-between gap-12 xl:gap-0">
        {missions.map(
          ({ id, image, link, percent, status, subtitle, title, label }) => (
            <div key={id} className="w-fit text-center mx-auto">
              <h3 className="font-segoe-regular font-semibold text-xs/4.5 xl:text-lg/6 text-primary-blue pb-1 xl:pb-2">
                <span>{title}</span>
              </h3>
              <h4 className="font-segoe-regular font-semibold text-base/6 xl:text-2xl/6 text-primary-blue pb-4 xl:pb-5">
                <span>{subtitle}</span>
              </h4>
              <div className="relative">
                <Image
                  src={image}
                  alt={subtitle}
                  width={379}
                  height={285}
                  className="w-81.5 h-60 md:w-48 md:h-35 xl:w-95 xl:h-71"
                />
                <div className="absolute -bottom-15 xl:-bottom-8 left-1/2 -translate-x-1/2">
                  <ProgressCircle percent={percent} />
                </div>
              </div>
              <h5 className="font-segoe-regular font-semibold text-sm/5 xl:text-lg/6 pt-18 xl:pt-10 pb-4 xl:pb-5">
                <span>{status}</span>
              </h5>
              <Link
                href={link}
                className="py-2.5 px-6.5 xl:px-5.5 border font-segoe-regular font-semibold inline-block rounded-full text-sm/5 xl:text-lg/6.5 bg-primary-yellow text-primary-blue border-transparent
              hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out"
              >
                {label}
              </Link>
            </div>
          )
        )}
      </div>
      <div className="z-10 flex justify-center mt-8 xl:mt-15">
        <Link
          href={viewMore.link}
          className="flex justify-center gap-3.5 items-end md:items-center bg-primary-blue w-full md:w-fit py-2.5 px-8.5 border font-segoe-regular font-semibold rounded-full text-sm/5 xl:text-lg/6 text-primary-yellow border-transparent
        hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out group"
        >
          <span>{viewMore.label}</span>
          <UpRightArrow className="text-primary-yellow group-hover:text-primary-blue duration-500 transition-colors ease-in-out" />
        </Link>
      </div>
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        className="absolute xl:!w-[1440px] xl:!h-[374px] z-0 xl:!top-2.5 xl:!left-11"
      />
    </Container>
  );
};
