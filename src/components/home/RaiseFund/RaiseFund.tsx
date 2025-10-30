import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, RaiseFundProps } from "@/components";

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
    className="bg-primary-yellow p-6 xl:py-17 xl:pl-21 xl:pr-12 rounded-[20px] xl:rounded-[60px]
      md:grid md:grid-cols-[minmax(0,352px)_minmax(0,240px)] xl:grid-cols-[minmax(0,705px)_minmax(0,408px)] md:gap-x-8 xl:gap-x-23 w-full relative"
  >
    <div className="md:col-start-1 md:col-end-1 w-full">
      <h2 className="font-segoe-regular font-semibold text-[32px]/10 xl:text-6xl/18.5 text-primary-blue pb-2 xl:pb-2.5 text-center md:text-start mx-auto md:ml-0 md:mr-auto">
        {title}
      </h2>
      <p className="font-segoe-regular text-xs/4.5 xl:text-base/6 pb-8 md:pb-0 text-center md:text-start">
        {description}
      </p>
    </div>
    <div className="md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 flex justify-center md:justify-end items-center pb-8 md:pb-0">
      <Image
        src={image.src}
        alt={image.alt}
        width={407}
        height={408}
        className="w-60 h-60 xl:w-102 xl:h-102"
      />
    </div>
    <div className="md:col-start-1 md:col-end-1 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-5">
      <Link
        href={enrollButton.href}
        className="py-2.5 px-6.5 xl:px-5.5 md:max-w-35 xl:max-w-45 w-full text-center border font-segoe-regular font-semibold inline-block rounded-full text-sm/5 xl:text-lg/6.5 bg-primary-blue text-primary-yellow border-transparent
          hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out"
      >
        {enrollButton.label}
      </Link>
      <Link
        href={fundForNGOButton.href}
        className="py-2.5 px-6.5 xl:px-5.5 md:max-w-47 xl:max-w-55 w-full text-center border font-segoe-regular font-semibold inline-block rounded-full text-sm/5 xl:text-lg/6.5 bg-transparent text-primary-blue border-primary-blue
          hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out"
      >
        {fundForNGOButton.label}
      </Link>
    </div>
    <Image
      src={background.src}
      alt={background.alt}
      fill
      className="absolute !h-135 xl:!w-full md:!h-full z-0 !top-8.5 md:!top-0 xl:!left-11"
    />
  </Container>
);
