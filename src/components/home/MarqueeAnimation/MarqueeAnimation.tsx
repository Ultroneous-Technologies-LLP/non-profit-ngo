import { FC } from "react";

import { Container } from "@/components";
import { NextImageWithFallback } from "@/components/common";

import { MarqueeAnimationProps } from "./type";

export const MarqueeAnimation: FC<MarqueeAnimationProps> = ({ donations }) => (
  <Container
    backgroundClassName="pb-25 xl:pb-40"
    className="bg-primary-yellow relative w-full overflow-hidden py-4 xl:py-3.5"
  >
    <div className="marquee relative w-full overflow-hidden">
      <div className="marquee__inner animate-marquee flex w-max">
        <div className="flex shrink-0 items-center gap-6 px-6 xl:gap-10 xl:px-5">
          {donations.map(({ id, name, amount, image, alt }) => (
            <div className="flex items-center gap-6 xl:gap-5" key={id}>
              <NextImageWithFallback
                alt={alt}
                className="h-6 w-9.5 xl:h-10 xl:w-16"
                height={40}
                src={image}
                width={64}
              />
              <p className="font-segoe-regular text-primary-blue text-base/6 font-semibold xl:text-lg/6">
                <span>{`${name} just donated $${amount}`}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-6 px-6 xl:gap-10 xl:px-5">
          {donations.map(({ id, name, amount, image, alt }) => (
            <div className="flex items-center gap-6 xl:gap-5" key={id}>
              <NextImageWithFallback
                alt={alt}
                className="h-6 w-9.5 xl:h-10 xl:w-16"
                height={40}
                src={image}
                width={64}
              />
              <p className="font-segoe-regular text-primary-blue text-base/6 font-semibold xl:text-lg/6">
                <span>{`${name} just donated $${amount}`}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
