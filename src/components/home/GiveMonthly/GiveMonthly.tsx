import Image from "next/image";
import { FC } from "react";

import { Container, Title, UpRightArrow } from "@/components";
import { LinkButton } from "@/components/common";

import { ProgressCircle } from "./ProgressCircle";
import { GiveMonthlyProps } from "./types";

export const GiveMonthly: FC<GiveMonthlyProps> = ({
  description,
  missions,
  title,
  viewMore,
  backgroundImage,
}) => (
  <Container
    backgroundClassName="pb-25 xl:pb-40 px-4 md:px-6 xl:px-15"
    className="relative overflow-hidden"
  >
    <div className="z-10 pt-4 md:pt-3 xl:pt-8">
      <Title className="pb-2 text-center xl:pb-2.5 xl:leading-23.5!" text={title} />
      <p className="font-segoe-regular mx-auto w-full max-w-205 pb-8 text-center text-xs/4.5 xl:pb-17 xl:text-base/6">
        <span>{description}</span>
      </p>
    </div>
    <div className="z-10 flex flex-col justify-center gap-12 md:flex-row md:justify-between xl:gap-0">
      {missions.map(
        ({ id, image, link, percent, status, subtitle, title: missionsTitle, label }) => (
          <div className="mx-auto w-fit text-center" key={id}>
            <h3 className="font-segoe-regular text-primary-blue pb-1 text-xs/4.5 font-semibold xl:pb-2 xl:text-lg/6">
              <span>{missionsTitle}</span>
            </h3>
            <h4 className="font-segoe-regular text-primary-blue pb-4 text-base/6 font-semibold xl:pb-5 xl:text-2xl/6">
              <span>{subtitle}</span>
            </h4>
            <div className="relative">
              <Image
                alt={subtitle}
                className="h-60 w-81.5 md:h-35 md:w-48 xl:h-71 xl:w-95"
                height={285}
                src={image}
                width={379}
              />
              <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 xl:-bottom-8">
                <ProgressCircle percent={percent} />
              </div>
            </div>
            <h5 className="font-segoe-regular pt-18 pb-4 text-sm/5 font-semibold xl:pt-10 xl:pb-5 xl:text-lg/6">
              <span>{status}</span>
            </h5>
            <LinkButton
              className="rounded-full px-6.5 py-2.5 xl:px-5.5"
              href={link}
              variant="primaryYellow"
            >
              {label}
            </LinkButton>
          </div>
        )
      )}
    </div>
    <div className="z-10 mt-8 flex justify-center xl:mt-15">
      <LinkButton
        className="group flex! w-full items-end justify-center gap-3.5 rounded-full px-8.5 py-2.5 md:w-fit md:items-center"
        href={viewMore.link}
        variant="primaryBlue"
      >
        <span>{viewMore.label}</span>
        <UpRightArrow className="text-primary-yellow group-hover:text-primary-blue transition-colors duration-500 ease-in-out" />
      </LinkButton>
    </div>
    <Image
      alt={backgroundImage.alt}
      className="absolute z-0 xl:top-2.5! xl:left-11! xl:h-93.5! xl:w-360!"
      fill
      src={backgroundImage.src}
    />
  </Container>
);
