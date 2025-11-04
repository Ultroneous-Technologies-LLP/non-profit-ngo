import Image from "next/image";
import { FC } from "react";

import { Container, Title } from "@/components";

import { WeNeedProps } from "./type";

export const WeNeed: FC<WeNeedProps> = ({ firstText, secondText, thirdText }) => (
  <Container className="px-4 pb-23 md:px-6 md:pb-0 xl:px-13.5 xl:pb-40">
    <div className="flex items-center gap-24.5 md:gap-35.5 xl:gap-54">
      <Title
        className="text-[76px]/25! md:text-[98px]/24.5! xl:text-[234px]/58.5!"
        text={firstText.title}
      />
      <Image
        alt={firstText.image.alt}
        className="h-12.5 w-19 md:h-25 md:w-38.5 xl:h-fit xl:w-71"
        height={182}
        src={firstText.image.src}
        width={283}
      />
    </div>
    <div className="flex items-end gap-24.5 md:gap-58 xl:gap-54">
      <div>
        <div>
          {secondText.titles.map(({ text }) => (
            <Title
              className={`text-[76px]/25! md:text-[98px]/24.5! xl:text-[234px]/58.5! 
              ${text === "YOUR" ? "text-cool-grey!" : "text-primary-blue!"}`}
              key={text}
              text={text}
            />
          ))}
        </div>
      </div>
      <div className="pb-5 md:pb-13 xl:pb-24">
        <Image
          alt={secondText.image.alt}
          className="h-12.5 w-19 md:h-25 md:w-38.5 xl:h-fit xl:w-71"
          height={182}
          src={secondText.image.src}
          width={283}
        />
      </div>
    </div>
    <div>
      <Title
        className={`text-[76px]/25 md:text-[98px]/24.5 xl:text-[234px]/58.5 ${thirdText.title.color}!`}
        text={thirdText.title.text}
      />
      <div className="-mt-12 pl-8 md:-mt-10 md:pl-12 xl:-mt-20 xl:pl-18">
        <Image
          alt={thirdText.image.alt}
          className="h-30 w-18.5 object-contain xl:h-70.5 xl:w-45"
          height={283}
          src={thirdText.image.src}
          width={180}
        />
      </div>
    </div>
  </Container>
);
