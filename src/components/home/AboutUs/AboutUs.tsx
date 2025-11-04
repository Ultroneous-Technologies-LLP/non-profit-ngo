import { FC } from "react";

import { Title, Container } from "@/components";
import { LinkButton, LinkButtonVariantEnum, NextImageWithFallback } from "@/components/common";

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
    className="relative flex flex-col items-center justify-evenly gap-8 overflow-hidden px-4 pb-25 md:flex-row md:px-6 md:pt-25 xl:gap-23 xl:px-13.5 xl:pt-0 xl:pb-40"
    id="about-us"
  >
    <div className="xl:pl-10">
      <NextImageWithFallback
        alt={image.alt}
        className="mx-auto h-73 w-66.5 xl:h-168 xl:w-148.5"
        height={673}
        src={image.src}
        width={594}
      />
    </div>
    <div className="w-full md:max-w-85 xl:max-w-165">
      <span className="font-segoe-regular text-primary-blue block pb-2 text-xl/7.5 font-semibold xl:pb-5 xl:text-2xl/6">
        {title}
      </span>
      <Title className="pb-2 md:pb-4 xl:pb-5 xl:leading-15!" text={description} />
      {longDescription.map(({ text }) => (
        <p
          className="font-segoe-regular pb-3 text-sm/5 last:pb-4 xl:pb-5 xl:text-base/6 xl:last:pb-5"
          key={text}
        >
          <span>{text}</span>
        </p>
      ))}
      <LinkButton
        className="rounded-40px px-5 py-2.5 xl:px-6"
        href={button.href}
        variant={LinkButtonVariantEnum.PRIMARY_YELLOW}
      >
        {button.label}
      </LinkButton>
    </div>
    <NextImageWithFallback
      alt={backgroundImage.alt}
      className="absolute top-18! left-0 z-0 h-138.5! w-232! object-cover xl:left-11! xl:h-102! xl:w-367!"
      fill
      src={backgroundImage.src}
    />
  </Container>
);
