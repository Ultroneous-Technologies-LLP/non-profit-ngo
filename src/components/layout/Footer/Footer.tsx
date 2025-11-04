"use client";

import Image from "next/image";
import { JSX } from "react";

import { Container, Title, Facebook, Instagram, LinkedIn, Youtube } from "@/components";
import { LinkButton } from "@/components/common";

import { FooterProps } from "./types";

export const Footer = ({
  logo,
  title,
  description,
  button,
  navLinks,
  socialSection,
  backgroundImage,
  companyName,
}: FooterProps): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      as="footer"
      backgroundClassName="bg-primary-yellow rounded-b-2xl xl:rounded-b-[29px]"
      className="relative overflow-hidden py-8 xl:py-23.5"
    >
      <div className="pb-8 xl:pb-13">
        <Image
          alt={logo.alt}
          className="mx-auto h-7.5 w-25 md:w-26.5 xl:h-8.5 xl:w-31"
          height={35}
          src={logo.src}
          width={125}
        />
      </div>
      <div className="pb-3 xl:pb-8.5">
        <Title
          className="mx-auto w-full max-w-77.5 pb-3 text-center xl:max-w-fit xl:pb-5 xl:leading-15!"
          text={title}
        />
        <p className="font-segoe-regular z-10 mx-auto max-w-77.5 text-center text-xs/4.5 xl:max-w-201.5 xl:text-base/6">
          <span>{description}</span>
        </p>
      </div>
      <div className="grid place-content-center pb-8 xl:pb-13">
        <LinkButton
          className="rounded-full px-4 py-2.5 xl:px-9.5 xl:py-2"
          href={button.href}
          variant="primaryBlue"
        >
          {button.label}
        </LinkButton>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 pb-8 xl:flex-row xl:gap-9 xl:pb-13">
        {navLinks.map((link, index) => (
          <LinkButton
            aria-label={link.label}
            className="font-segoe-regular text-primary-blue z-10 text-base/6 font-semibold xl:text-lg/4.5"
            href={link.href}
            isNormalLink
            key={index}
          >
            {link.label}
          </LinkButton>
        ))}
      </div>
      <div className="pb-8 xl:pb-15">
        <h3 className="font-segoe-regular text-primary-blue z-10 pb-3 text-center text-sm/5 font-semibold xl:pb-5.5 xl:text-xl/4.5">
          <span>{socialSection.title}</span>
        </h3>
        <div className="flex justify-center gap-3 xl:gap-6">
          {socialSection.links.map((item, index) => (
            <LinkButton
              aria-label={item.label}
              className="border-primary-blue/10 z-10 grid size-9.5 place-content-center rounded-full border-2 xl:size-11"
              href={item.href}
              isNormalLink
              key={index}
            >
              {item.icon === "LinkedIn" && <LinkedIn className="text-primary-blue" />}
              {item.icon === "Facebook" && <Facebook className="text-primary-blue" />}
              {item.icon === "Instagram" && <Instagram className="text-primary-blue" />}
              {item.icon === "Youtube" && <Youtube className="text-primary-blue" />}
            </LinkButton>
          ))}
        </div>
      </div>
      <span className="font-segoe-regular text-philippine-gray z-10 block text-center text-xs/4 font-semibold xl:text-sm/3.5">
        © {currentYear} {companyName}
      </span>
      <Image
        alt={backgroundImage.alt}
        className="absolute top-0 z-0 h-169.5 w-367 object-contain xl:top-5 xl:left-11"
        fill
        src={backgroundImage.src}
      />
    </Container>
  );
};
