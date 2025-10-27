"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { useWindowSize } from "@/hooks";
import { BREAKPOINT_XL } from "@/constant";
import { Cross, LoginIcons } from "@/components/icons";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ buttons, logo, menu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= BREAKPOINT_XL) {
      setMenuOpen(false);
    }
  }, [width]);

  return (
    <nav
      className={clsx(
        "left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-400 ease-linear mx-auto",
        {
          "top-0 fixed": scrolled && !menuOpen,
          "top-6 xl:top-14 relative": !scrolled && !menuOpen,
          "fixed inset-0": menuOpen,
        }
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div
        className={clsx(
          "2xl:max-w-348.5 w-auto rounded-xl transition-transform duration-500 ease-linear mx-4 md:mx-6 xl:mx-16 2xl:mx-auto",
          {
            "bg-[#ECECE2] shadow-md backdrop-blur-[22px]": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <div className="flex justify-between items-center py-4 max-w-336 mx-auto px-4 xl:px-16">
          <div>
            <Image
              src={logo.src}
              width={125}
              height={35}
              alt={logo.alt}
              className="w-21 h-6 xl:w-31 xl:h-8.5"
              priority
            />
          </div>
          <div className="hidden gap-9 xl:flex">
            {menu.map(({ ariaLabel, href, id, label }) => (
              <Link
                key={id}
                href={href}
                className="font-segoe-regular font-semibold text-xl/5 text-primary-blue"
                aria-label={ariaLabel}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="gap-5 items-center hidden xl:flex">
            <Link
              className="bg-primary-yellow py-5 px-6.5 rounded-full font-segoe-regular font-semibold text-xl/5 text-primary-blue"
              aria-label={buttons.donateButton.ariaLabel}
              href={buttons.donateButton.href}
            >
              {buttons.donateButton.label}
            </Link>
            <Link
              className="font-segoe-regular font-semibold text-xl/5 text-black"
              href={buttons.loginButton.href}
              aria-label={buttons.loginButton.ariaLabel}
            >
              {buttons.loginButton.label}
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex-col gap-1 flex xl:hidden z-50 relative"
            aria-label="Toggle menu"
          >
            <span className="rounded-full  inline-block ml-auto mr-0 bg-primary-blue w-6 h-1" />
            <span className="w-8 h-1 rounded-full inline-block transition-all duration-300 bg-primary-blue" />
            <span className="rounded-full inline-block ml-0 mr-auto bg-primary-blue w-6 h-1" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-primary-blue flex flex-col px-4 pb-4 pt-12.5 text-center xl:hidden w-full h-dvh">
          <div className="w-full">
            <div className="pb-4 flex justify-end">
              <Cross onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-10 text-start">
                {menu.map(({ id, label, href, ariaLabel }) => (
                  <Link
                    key={id}
                    href={href}
                    aria-label={ariaLabel}
                    onClick={() => setMenuOpen(false)}
                    className="font-segoe-regular font-semibold text-4xl/12 text-[#ECECE2] block"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href={buttons.donateButton.href}
                  aria-label={buttons.donateButton.ariaLabel}
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary-yellow py-5 px-10 rounded-full font-segoe-regular font-semibold text-xl/5 text-primary-blue inline-block"
                >
                  {buttons.donateButton.label}
                </Link>
              </div>
              <div className="gap-4 flex items-center">
                <LoginIcons />
                <Link
                  className="font-segoe-regular font-semibold text-4xl/12 text-[#ECECE2]"
                  href={buttons.loginButton.href}
                  aria-label={buttons.loginButton.ariaLabel}
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
