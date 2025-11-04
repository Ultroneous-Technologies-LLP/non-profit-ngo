import { FC } from "react";

import { Container, Title } from "@/components";
import { LinkButton, LinkButtonVariantEnum, NextImageWithFallback } from "@/components/common";

import { RaiseFundProps } from "./type";

export const RaiseFund: FC<RaiseFundProps> = ({
  title,
  description,
  enrollButton,
  fundForNGOButton,
  image,
  background,
}) => (
  <Container
    backgroundClassName="mx-4 md:mx-6 xl:mx-15 pb-22.5 xl:pb-40 overflow-hidden"
    className="bg-primary-yellow rounded-20px xl:rounded-60px relative w-full p-6 md:grid
      md:grid-cols-[minmax(0,352px)_minmax(0,240px)] md:gap-x-8 xl:grid-cols-[minmax(0,705px)_minmax(0,408px)] xl:gap-x-23 xl:py-17 xl:pr-12 xl:pl-21"
  >
    <div className="z-10 w-full md:col-start-1 md:col-end-1">
      <Title
        className="mx-auto w-full max-w-77.5 pb-2 text-center md:mr-auto md:ml-0 md:text-start xl:max-w-fit xl:pb-2.5"
        text={title}
      />
      <p className="font-segoe-regular pb-8 text-center text-xs/4.5 md:pb-0 md:text-start xl:text-base/6">
        {description}
      </p>
    </div>
    <div className="z-10 flex items-center justify-center pb-8 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 md:justify-end md:pb-0">
      <NextImageWithFallback
        alt={image.alt}
        className="h-60 w-60 xl:h-102 xl:w-102"
        height={408}
        src={image.src}
        width={407}
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-5 md:col-start-1 md:col-end-1 md:flex-row md:items-start md:justify-start">
      <LinkButton
        className="w-full rounded-full px-6.5 py-2.5 text-center md:max-w-35 xl:max-w-45 xl:px-5.5"
        href={enrollButton.link}
        variant={LinkButtonVariantEnum.PRIMARY_BLUE}
      >
        {enrollButton.label}
      </LinkButton>
      <LinkButton
        className="border-primary-blue! w-full rounded-full px-6.5 py-2.5 md:max-w-47 xl:max-w-55 xl:px-5.5"
        href={fundForNGOButton.link}
        variant={LinkButtonVariantEnum.OUTLINE_BLUE}
      >
        {fundForNGOButton.label}
      </LinkButton>
    </div>
    <NextImageWithFallback
      alt={background.alt}
      className="absolute top-8.5! z-0 h-135! md:top-0! md:h-full! xl:left-11! xl:w-full!"
      fill
      src={background.src}
    />
  </Container>
);
