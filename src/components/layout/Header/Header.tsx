"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { Cross, LoginIcons } from "@/components";
import { BREAKPOINT_XL } from "@/constant";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ buttons, logo, menu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= BREAKPOINT_XL && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return (): void => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <nav
      aria-label="Main Navigation"
      className={clsx(
        "left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-400 ease-linear",
        {
          "fixed top-0": scrolled && !menuOpen,
          "relative top-6 xl:top-14": !scrolled && !menuOpen,
          "fixed inset-0": menuOpen,
        }
      )}
      role="navigation"
    >
      <div
        className={clsx(
          "mx-4 w-auto rounded-xl transition-transform duration-500 ease-linear md:mx-6 xl:mx-16 2xl:mx-auto 2xl:max-w-348.5",
          {
            "bg-[#ECECE2] shadow-md backdrop-blur-[22px]": scrolled,
            "bg-transparent": !scrolled,
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
                className="font-segoe-regular text-xl/5 font-semibold text-[#002C5B]"
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
              className="font-segoe-regular rounded-full bg-[#EDFCA7] px-6.5 py-5 text-xl/5 font-semibold text-[#002C5B]"
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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="mr-0 ml-auto inline-block h-1 w-6 rounded-full bg-[#002C5B]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#002C5B] transition-all duration-300" />
            <span className="mr-auto ml-0 inline-block h-1 w-6 rounded-full bg-[#002C5B]" />
          </button>
        </div>
      </div>

      {/* mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 flex h-dvh w-full flex-col bg-[#002C5B] px-4 pt-12.5 pb-4 text-center xl:hidden">
          <div className="w-full">
            <div className="flex justify-end pb-4">
              <Cross onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-10 text-start">
                {menu.map(({ id, label, href, ariaLabel }) => (
                  <Link
                    aria-label={ariaLabel}
                    className="font-segoe-regular block text-4xl/12 font-semibold text-[#ECECE2]"
                    href={href}
                    key={id}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  aria-label={buttons.donateButton.ariaLabel}
                  className="font-segoe-regular inline-block rounded-full bg-[#EDFCA7] px-10 py-5 text-xl/5 font-semibold text-[#002C5B]"
                  href={buttons.donateButton.href}
                  onClick={() => setMenuOpen(false)}
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
