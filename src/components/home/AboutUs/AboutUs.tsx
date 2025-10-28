import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/common";

import { AboutUsProps } from "./types";

export const AboutUs: FC<AboutUsProps> = ({
  backgroundImage,
  button,
  image,
  title,
  description,
  longDescription,
}) => (
  <Container
    id="about-us"
    className="px-4 md:px-6 xl:px-13.5 pb-25 xl:pb-40 md:pt-25 xl:pt-0 flex flex-col md:flex-row gap-8 xl:gap-23 justify-evenly items-center relative overflow-hidden"
  >
    <div className="xl:pl-10">
      <Image
        alt={image.alt}
        src={image.src}
        width={594}
        height={673}
        className="w-66.5 h-73 xl:w-148.5 xl:h-168 mx-auto"
      />
    </div>
    <div className="md:max-w-85 xl:max-w-165 w-full">
      <span className="block font-segoe-regular font-semibold text-xl/7.5 xl:text-2xl/6 text-primary-blue pb-2 xl:pb-5">
        {title}
      </span>
      <h2 className="font-segoe-regular font-semibold text-[32px]/10 xl:text-[61px]/15 text-primary-blue pb-2 md:pb-4 xl:pb-5">
        <span>{description}</span>
      </h2>
      {longDescription.map(({ text }) => (
        <p
          key={text}
          className="font-segoe-regular text-sm/5 xl:text-base/6 pb-3 xl:pb-5 last:pb-4 xl:last:pb-5"
        >
          <span>{text}</span>
        </p>
      ))}
      <Link
        href={button.href}
        className="inline-block py-2.5 px-5 xl:px-6 text-sm/5 xl:text-lg/6.5 font-segoe-regular font-semibold rounded-[40px] border border-transparent text-primary-blue bg-primary-yellow
          transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-primary-blue hover:border-primary-blue"
      >
        {button.label}
      </Link>
    </div>
    <Image
      src={backgroundImage.src}
      alt={backgroundImage.alt}
      fill
      className="absolute !top-18 left-0 xl:!left-11 z-0 !w-232 !h-138.5 xl:!w-[1468px] xl:!h-[409px] object-cover"
    />
  </Container>
);
