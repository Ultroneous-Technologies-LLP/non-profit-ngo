"use client";

import Link from "next/link";
import Image from "next/image";

import { Container } from "../../common";
import { Facebook, Instagram, LinkedIn, Youtube } from "../../icons";

import { FooterProps } from "./types";

export const Footer = ({
  logo,
  heading,
  description,
  button,
  navLinks,
  socialSection,
  backgroundImage,
  companyName,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      className="py-8 xl:py-23.5 relative z-10 overflow-hidden"
      backgroundClassName="bg-primary-yellow rounded-b-2xl xl:rounded-b-[29px]"
      as="footer"
    >
      <div className="pb-8 xl:pb-13">
        <Image
          src={logo.src}
          width={125}
          height={35}
          alt={logo.alt}
          className="mx-auto w-25 md:w-26.5 h-7.5 xl:w-31 xl:h-8.5"
        />
      </div>
      <div className="pb-3 xl:pb-8.5">
        <h2 className="font-segoe-regular font-semibold text-[32px]/10 xl:text-[61px]/15 text-center text-primary-blue pb-3 xl:pb-5 max-w-77.5 w-full xl:max-w-fit mx-auto">
          <span>{heading}</span>
        </h2>
        <p className="font-segoe-regular text-xs/4.5 xl:text-base/6 text-center max-w-77.5 xl:max-w-201.5 mx-auto">
          <span>{description}</span>
        </p>
      </div>
      <div className="grid place-content-center pb-8 xl:pb-13">
        <Link
          href={button.href}
          className="bg-primary-blue px-4 xl:px-9.5 py-2.5 xl:py-2 rounded-full font-segoe-regular text-sm/5 xl:text-lg/6.5 text-primary-yellow font-semibold inline-block 
          border border-transparent hover:border-primary-blue hover:bg-transparent hover:text-primary-blue transition-colors duration-500 ease-in-out"
        >
          {button.label}
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-9 justify-center pb-8 xl:pb-13">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-segoe-regular font-semibold text-base/6 xl:text-lg/4.5 text-primary-blue"
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="pb-8 xl:pb-15">
        <h3 className="font-segoe-regular font-semibold text-sm/5 xl:text-xl/4.5 text-primary-blue text-center pb-3 xl:pb-5.5">
          <span>{socialSection.title}</span>
        </h3>
        <div className="flex gap-3 xl:gap-6 justify-center">
          {socialSection.links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="border-2 border-primary-blue/10 size-9.5 xl:size-11 rounded-full grid place-content-center"
              aria-label={item.label}
            >
              {item.icon === "LinkedIn" && (
                <LinkedIn className="text-primary-blue" />
              )}
              {item.icon === "Facebook" && (
                <Facebook className="text-primary-blue" />
              )}
              {item.icon === "Instagram" && (
                <Instagram className="text-primary-blue" />
              )}
              {item.icon === "Youtube" && (
                <Youtube className="text-primary-blue" />
              )}
            </Link>
          ))}
        </div>
      </div>
      <span className="block font-segoe-regular font-semibold text-xs/4 xl:text-sm/3.5 text-[#8D8D8D] text-center">
        © {currentYear} {companyName}
      </span>
      <div className="absolute top-0 xl:top-5 xl:left-11 z-0 w-[1468px] h-[678px]">
        <Image
          src={backgroundImage.src}
          width={1468}
          height={678}
          alt={backgroundImage.alt}
          className="w-full h-full object-contain"
        />
      </div>
    </Container>
  );
};
