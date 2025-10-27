import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { HeroProps } from "./types";
import { Container } from "../../common";

export const Hero: FC<HeroProps> = ({
  heading,
  description,
  event,
  heroImage,
  backgroundImage,
}) => (
  <Container className="xl:pt-30.5 pb-25 md:pb-14 xl:pb-40 flex flex-col justify-between md:flex-row px-4 md:px-6 xl:px-15 gap-6 xl:gap-5 relative overflow-hidden">
    <div className="md:max-w-91.5 xl:max-w-165 w-full">
      <h1 className="font-segoe-regular font-semibold text-5xl/14 xl:text-[81px]/21.5 text-primary-blue pb-6 xl:pb-9">
        <span>{heading}</span>
      </h1>
      <p className="font-segoe-regular text-sm/5 xl:text-base/6 max-w-150 w-full pb-6">
        <span>{description}</span>
      </p>
      <div className="bg-white/25 flex flex-col md:flex-row gap-4 xl:gap-6.5 p-4 xl:px-5 xl:py-5.5 rounded-[40px] w-full md:w-fit mx-auto md:ml-0 md:mr-auto">
        <div className="relative w-full md:w-fit">
          <Image
            alt={event.image.alt}
            src={event.image.src}
            width={159}
            height={163}
            className="w-full h-35 xl:h-40.5 object-cover rounded-[20px]"
          />
          <Image
            alt={event.playButton.alt}
            src={event.playButton.src}
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="md:max-w-44 xl:max-w-75 w-full">
          <h2 className="font-segoe-regular font-semibold text-base/6 xl:text-2xl/6.5 pb-2 xl:pb-4">
            <span>{event.title}</span>
          </h2>
          <p className="font-segoe-regular text-sm/5 xl:text-base/6 pb-2 xl:pb-4">
            <span>{event.description}</span>
          </p>
          <Link
            href={event.button.href}
            className="inline-block bg-primary-yellow rounded-[40px] py-2.5 px-8.5 xl:px-12 font-segoe-regular font-semibold text-sm/5 xl:text-lg/6.5 text-primary-blue border border-transparent hover:bg-transparent hover:border-primary-blue transition-colors duration-500 ease-in-out"
          >
            {event.button.label}
          </Link>
        </div>
      </div>
    </div>
    <div className="md:max-w-70.5 lg:max-w-170 w-full hidden md:block">
      <Image alt={heroImage.alt} src={heroImage.src} width={686} height={669} />
    </div>
    <Image
      src={backgroundImage.src}
      fill
      alt={backgroundImage.alt}
      className="absolute top-0 xl:top-5 left-0 xl:!left-11 z-0 !w-232 !h-138.5 xl:!w-[1468px] xl:!h-[409px]"
    />
  </Container>
);
