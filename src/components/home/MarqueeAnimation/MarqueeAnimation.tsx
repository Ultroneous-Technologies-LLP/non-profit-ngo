import { FC } from "react";
import Image from "next/image";

import { Container, MarqueeAnimationProps } from "@/components";

export const MarqueeAnimation: FC<MarqueeAnimationProps> = ({ donations }) => {
  return (
    <Container
      backgroundClassName="pb-25 xl:pb-40"
      className="overflow-hidden relative w-full bg-primary-yellow py-4 xl:py-3.5"
    >
      <div className="marquee overflow-hidden relative w-full">
        <div className="marquee__inner flex w-max animate-marquee">
          <div className="flex gap-6 xl:gap-10 items-center px-6 xl:px-5 shrink-0">
            {donations.map(({ id, name, amount, image, alt }) => (
              <div key={id} className="flex gap-6 xl:gap-5 items-center">
                <Image
                  src={image}
                  alt={alt}
                  width={64}
                  height={40}
                  className="w-9.5 h-6 xl:w-16 xl:h-10"
                />
                <p className="font-segoe-regular font-semibold text-base/6 xl:text-lg/6 text-primary-blue">
                  <span>{`${name} just donated $${amount}`}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-6 xl:gap-10 items-center px-6 xl:px-5 shrink-0">
            {donations.map(({ id, name, amount, image, alt }) => (
              <div key={id} className="flex gap-6 xl:gap-5 items-center">
                <Image
                  src={image}
                  alt={alt}
                  width={64}
                  height={40}
                  className="w-9.5 h-6 xl:w-16 xl:h-10"
                />
                <p className="font-segoe-regular font-semibold text-base/6 xl:text-lg/6 text-primary-blue">
                  <span>{`${name} just donated $${amount}`}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
