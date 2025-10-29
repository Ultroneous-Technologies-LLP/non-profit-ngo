import { FC } from "react";
import Image from "next/image";

import { Container } from "@/components/common";

import { MostTrustedProps } from "./type";

export const MostTrusted: FC<MostTrustedProps> = ({
  backgroundImage,
  stats,
  title,
}) => {
  return (
    <Container
      backgroundClassName="mx-4 xl:mx-15 pb-20.5 md:pb-21.5 xl:pb-40 overflow-hidden"
      className="bg-primary-yellow rounded-[20px] xl:rounded-[60px] py-6 xl:py-17.5 relative"
    >
      <h2 className="z-10 font-segoe-regular font-semibold text-[32px]/10 xl:text-[60px]/18.5 text-primary-blue md:max-w-100 xl:max-w-140 w-full mx-auto text-center pb-8 xl:pb-15">
        <span>{title}</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-evenly z-10">
        {stats.map(({ label, number }) => (
          <div key={number} className="text-center">
            <h3 className="font-segoe-bold font-bold text-[32px]/10 xl:text-[60px]/18.5 text-primary-blue pb-2 xl:pb-2.5">
              <span>{number}</span>
            </h3>
            <h4 className="font-segoe-regular font-semibold text-sm/5 xl:text-2xl/6 text-primary-blue">
              <span>{label}</span>
            </h4>
          </div>
        ))}
      </div>
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        className="absolute inset-0 object-cover object-center z-0"
      />
    </Container>
  );
};
