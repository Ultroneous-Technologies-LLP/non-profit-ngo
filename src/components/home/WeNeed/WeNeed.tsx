import { FC } from "react";
import Image from "next/image";

import { Container } from "@/components/common";

import { WeNeedProps } from "./type";

export const WeNeed: FC<WeNeedProps> = ({
  firstText,
  secondText,
  thirdText,
}) => (
  <Container className="px-4 md:px-6 xl:px-13.5 pb-23 md:pb-0 xl:pb-40">
    <div className="flex gap-24.5 md:gap-35.5 xl:gap-54 items-center">
      <h2 className="font-segoe-regular font-semibold text-[76px]/25 md:text-[98px]/24.5 xl:text-[234px]/58.5 text-primary-blue">
        <span>{firstText.title}</span>
      </h2>
      <Image
        alt={firstText.image.alt}
        src={firstText.image.src}
        width={283}
        height={182}
        className="xl:h-fit w-19 h-12.5 md:w-38.5 md:h-25 xl:w-71"
      />
    </div>
    <div className="flex gap-24.5 md:gap-58 xl:gap-54 items-end">
      <div>
        <div>
          {secondText.titles.map((title, index) => (
            <h2
              key={index}
              className={`font-segoe-regular font-semibold text-[76px]/25 md:text-[98px]/24.5 xl:text-[234px]/58.5 ${title.color}`}
            >
              <span>{title.text}</span>
            </h2>
          ))}
        </div>
      </div>
      <div className="pb-5 md:pb-13 xl:pb-24">
        <Image
          alt={secondText.image.alt}
          src={secondText.image.src}
          width={283}
          height={182}
          className="xl:h-fit w-19 h-12.5 md:w-38.5 md:h-25 xl:w-71"
        />
      </div>
    </div>
    <div>
      <h2
        className={`font-segoe-regular font-semibold text-[76px]/25 md:text-[98px]/24.5 xl:text-[234px]/58.5 ${thirdText.title.color}`}
      >
        <span>{thirdText.title.text}</span>
      </h2>
      <div className="pl-8 -mt-12 md:pl-12 md:-mt-10 xl:pl-18 xl:-mt-20">
        <Image
          alt={thirdText.image.alt}
          src={thirdText.image.src}
          width={180}
          height={283}
          className="w-18.5 h-30 xl:w-45 xl:h-70.5 object-contain"
        />
      </div>
    </div>
  </Container>
);
