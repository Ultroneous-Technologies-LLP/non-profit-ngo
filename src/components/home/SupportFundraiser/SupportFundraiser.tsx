import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Container, Title, UpRightArrow } from "@/components";

import { SupportFundraiserProps } from "./type";

export const SupportFundraiser: FC<SupportFundraiserProps> = ({
  title,
  description,
  fundraisers,
  viewMore,
  backgroundImage,
}) => (
  <Container
    backgroundClassName="relative overflow-hidden"
    className="px-4 pb-25 md:px-6 xl:px-15 xl:pb-40"
  >
    <div className="z-10 md:pt-3 xl:pt-11">
      <Title className="pb-2 text-center xl:pb-2.5" text={title} />
      <p className="font-segoe-regular mx-auto w-full max-w-205 pb-8 text-center text-xs/4.5 xl:pb-15 xl:text-base/6">
        <span>{description}</span>
      </p>
    </div>
    <div className="flex flex-col justify-between gap-8 text-center md:flex-row">
      {fundraisers.map(({ alt, donateText, src, link, subtitle, title: fundraisersTitle, id }) => (
        <div className="mx-auto w-full md:max-w-75 xl:max-w-99" key={id}>
          <Image
            alt={alt}
            className="xl:rounded-20px mx-auto h-60 w-81.5 rounded-3xl md:h-45 md:w-75.5 xl:h-76 xl:w-99"
            height={305}
            src={src}
            width={397}
          />
          <h3 className="font-segoe-regular text-primary-blue mx-auto w-full pt-4 pb-1 text-base/6 font-semibold md:max-w-81.5 xl:max-w-fit xl:pt-5 xl:pb-2.5 xl:text-2xl/8">
            <span>{fundraisersTitle}</span>
          </h3>
          <h4 className="font-segoe-regular text-cool-grey pb-4 text-xs/4 font-semibold xl:pb-5 xl:text-2xl/8">
            <span>{subtitle}</span>
          </h4>
          <Link
            className="font-segoe-regular bg-primary-yellow text-primary-blue hover:text-primary-blue hover:border-primary-blue inline-block rounded-full border border-transparent px-6.5 py-2.5 text-sm/5 font-semibold
            transition-colors duration-500 ease-in-out hover:bg-transparent xl:px-5.5 xl:text-lg/6.5"
            href={link}
          >
            {donateText}
          </Link>
        </div>
      ))}
    </div>
    <div className="z-10 mt-8 flex justify-center xl:mt-15">
      <Link
        className="bg-primary-blue font-segoe-regular text-primary-yellow hover:text-primary-blue hover:border-primary-blue group flex w-full items-end justify-center gap-3.5 rounded-full border border-transparent px-8.5 py-2.5 text-sm/5 font-semibold
        transition-colors duration-500 ease-in-out hover:bg-transparent md:w-fit md:items-center xl:text-lg/6"
        href={viewMore.link}
      >
        <span>{viewMore.label}</span>
        <UpRightArrow className="text-primary-yellow group-hover:text-primary-blue transition-colors duration-500 ease-in-out" />
      </Link>
    </div>
    <Image
      alt={backgroundImage.alt}
      className="absolute top-12! z-0 xl:top-2.5! xl:left-11! xl:h-93.5! xl:w-360!"
      fill
      src={backgroundImage.src}
    />
  </Container>
);
