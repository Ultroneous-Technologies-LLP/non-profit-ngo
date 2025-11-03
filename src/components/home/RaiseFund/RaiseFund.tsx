import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Container } from "@/components";

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
    className="bg-primary-yellow relative w-full rounded-[20px] p-6 md:grid md:grid-cols-[minmax(0,352px)_minmax(0,240px)]
      md:gap-x-8 xl:grid-cols-[minmax(0,705px)_minmax(0,408px)] xl:gap-x-23 xl:rounded-[60px] xl:py-17 xl:pr-12 xl:pl-21"
  >
    <div className="z-10 w-full md:col-start-1 md:col-end-1">
      <h2 className="font-segoe-regular text-primary-blue mx-auto pb-2 text-center text-[32px]/10 font-semibold md:mr-auto md:ml-0 md:text-start xl:pb-2.5 xl:text-6xl/18.5">
        {title}
      </h2>
      <p className="font-segoe-regular pb-8 text-center text-xs/4.5 md:pb-0 md:text-start xl:text-base/6">
        {description}
      </p>
    </div>
    <div className="z-10 flex items-center justify-center pb-8 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 md:justify-end md:pb-0">
      <Image
        alt={image.alt}
        className="h-60 w-60 xl:h-102 xl:w-102"
        height={408}
        src={image.src}
        width={407}
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-5 md:col-start-1 md:col-end-1 md:flex-row md:items-start md:justify-start">
      <Link
        className="font-segoe-regular bg-primary-blue text-primary-yellow hover:text-primary-blue hover:border-primary-blue z-10 inline-block w-full rounded-full border border-transparent px-6.5 py-2.5 text-center text-sm/5 font-semibold transition-colors duration-500
        ease-in-out hover:bg-transparent md:max-w-35 xl:max-w-45 xl:px-5.5 xl:text-lg/6.5"
        href={enrollButton.link}
      >
        {enrollButton.label}
      </Link>
      <Link
        className="font-segoe-regular text-primary-blue border-primary-blue hover:text-primary-blue hover:border-primary-blue z-10 inline-block w-full rounded-full border bg-transparent px-6.5 py-2.5 text-center text-sm/5 font-semibold transition-colors duration-500
        ease-in-out hover:bg-transparent md:max-w-47 xl:max-w-55 xl:px-5.5 xl:text-lg/6.5"
        href={fundForNGOButton.link}
      >
        {fundForNGOButton.label}
      </Link>
    </div>
    <Image
      alt={background.alt}
      className="absolute top-8.5! z-0 h-135! md:top-0! md:h-full! xl:left-11! xl:w-full!"
      fill
      src={background.src}
    />
  </Container>
);
