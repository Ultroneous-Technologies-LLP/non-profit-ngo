"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { Cross, LoginIcons } from "@/components";
import { BREAKPOINT_XL } from "@/constant";

import { HeaderProps } from "./types";

const SCROLL_Y = 20;

export const Header: FC<HeaderProps> = ({ buttons, logo, menu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > SCROLL_Y);
    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= BREAKPOINT_XL && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return (): void => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav
      aria-label="Main Navigation"
      className={clsx(
        "left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-400 ease-linear",
        {
          "fixed top-0": isScrolled && !isMenuOpen,
          "relative top-6 xl:top-14": !isScrolled && !isMenuOpen,
          "fixed inset-0": isMenuOpen,
        }
      )}
      role="navigation"
    >
      <div
        className={clsx(
          "mx-4 w-auto rounded-xl transition-transform duration-500 ease-linear md:mx-6 xl:mx-16 2xl:mx-auto 2xl:max-w-348.5",
          {
            "bg-[#ECECE2] shadow-md backdrop-blur-[22px]": isScrolled,
            "bg-transparent": !isScrolled,
          }
        )}
      >
        <div className="mx-auto flex max-w-336 items-center justify-between px-4 py-4 xl:px-16">
          <div>
            <Image
              alt={logo.alt}
              className="h-6 w-21 xl:h-8.5 xl:w-31"
              height={35}
              priority
              src={logo.src}
              width={125}
            />
          </div>

          {/* desktop menu */}
          <div className="hidden gap-9 xl:flex">
            {menu.map(({ ariaLabel, href, id, label }) => (
              <Link
                aria-label={ariaLabel}
                className="font-segoe-regular text-primary-blue text-xl/5 font-semibold"
                href={href}
                key={id}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* desktop buttons */}
          <div className="hidden items-center gap-5 xl:flex">
            <Link
              aria-label={buttons.donateButton.ariaLabel}
              className="font-segoe-regular bg-primary-yellow text-primary-blue rounded-full px-6.5 py-5 text-xl/5 font-semibold"
              href={buttons.donateButton.href}
            >
              {buttons.donateButton.label}
            </Link>
            <Link
              aria-label={buttons.loginButton.ariaLabel}
              className="font-segoe-regular text-xl/5 font-semibold text-black"
              href={buttons.loginButton.href}
            >
              {buttons.loginButton.label}
            </Link>
          </div>

          {/* mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="relative z-50 flex flex-col gap-1 xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bg-primary-blue mr-0 ml-auto inline-block h-1 w-6 rounded-full" />
            <span className="bg-primary-blue inline-block h-1 w-8 rounded-full transition-all duration-300" />
            <span className="bg-primary-blue mr-auto ml-0 inline-block h-1 w-6 rounded-full" />
          </button>
        </div>
      </div>

      {/* mobile overlay menu */}
      {isMenuOpen && (
        <div className="bg-primary-blue fixed inset-0 flex h-dvh w-full flex-col px-4 pt-12.5 pb-4 text-center xl:hidden">
          <div className="w-full">
            <div className="flex justify-end pb-4">
              <Cross onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-10 text-start">
                {menu.map(({ id, label, href, ariaLabel }) => (
                  <Link
                    aria-label={ariaLabel}
                    className="font-segoe-regular block text-4xl/12 font-semibold text-[#ECECE2]"
                    href={href}
                    key={id}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  aria-label={buttons.donateButton.ariaLabel}
                  className="font-segoe-regular bg-primary-yellow text-primary-blue inline-block rounded-full px-10 py-5 text-xl/5 font-semibold"
                  href={buttons.donateButton.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {buttons.donateButton.label}
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <LoginIcons />
                <Link
                  aria-label={buttons.loginButton.ariaLabel}
                  className="font-segoe-regular text-4xl/12 font-semibold text-[#ECECE2]"
                  href={buttons.loginButton.href}
                >
                  {buttons.loginButton.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
