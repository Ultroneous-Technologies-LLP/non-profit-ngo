import Image from "next/image";
import { FC } from "react";

import { Container } from "@/components";

import { MostTrustedProps } from "./type";

export const MostTrusted: FC<MostTrustedProps> = ({ backgroundImage, stats, title }) => (
  <Container
    backgroundClassName="mx-4 xl:mx-15 pb-20.5 md:pb-21.5 xl:pb-40 overflow-hidden"
    className="bg-primary-yellow xl:rounded-60px rounded-20px relative py-6 xl:py-17.5"
  >
    <h2 className="font-segoe-regular text-primary-blue text-32px/10 z-10 mx-auto w-full pb-8 text-center font-semibold md:max-w-100 xl:max-w-140 xl:pb-15 xl:text-6xl/18.5">
      <span>{title}</span>
    </h2>
    <div className="z-10 flex flex-col justify-evenly gap-6 md:flex-row md:gap-0">
      {stats.map(({ label, number }) => (
        <div className="text-center" key={number}>
          <h3 className="font-segoe-bold text-primary-blue text-32px/10 pb-2 font-bold xl:pb-2.5 xl:text-6xl/18.5">
            <span>{number}</span>
          </h3>
          <h4 className="font-segoe-regular text-primary-blue text-sm/5 font-semibold xl:text-2xl/6">
            <span>{label}</span>
          </h4>
        </div>
      ))}
    </div>
    <Image
      alt={backgroundImage.alt}
      className="absolute inset-0 z-0 object-cover object-center"
      fill
      src={backgroundImage.src}
    />
  </Container>
);
