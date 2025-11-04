import clsx from "clsx";
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import { Footer, Header, Icon } from "@/components";
import { segoeUiFont, segoeUiBoldFont } from "@/constant";
import data from "@/content/layout.json";

import "../../styles/globals.css";
import { LayoutProps } from "./types";

export const metadata: Metadata = {
  title: "NGO Website Design | Non-Profit Charity Landing Page UI",
  description:
    "Modern NGO website UI design for non-profits and charities. Clean homepage concept focused on donations, fundraising, and global humanitarian support.",
  keywords: [
    "#NGOWebsite",
    "#CharityDesign",
    "#UIDesign",
    "#NonProfitWeb",
    "#FundraisingUI",
    "#WebDesign",
    "#LandingPage",
    "#SocialImpact",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },

      // Dark mode versions
      {
        url: "/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180" },
      {
        url: "/favicon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const { header, footer }: LayoutProps = {
    ...data,
    footer: {
      ...data.footer,
      socialSection: {
        ...data.footer.socialSection,
        links: data.footer.socialSection.links.map((link) => ({
          ...link,
          icon: link.icon as Icon,
        })),
      },
    },
  };

  return (
    <html className="flex items-center justify-center scroll-smooth bg-[#D4D4D4]" lang="en">
      <body
        className={clsx(
          "bg-alabaster mx-4 mt-6 w-full max-w-400 rounded-2xl antialiased shadow-[39.55px_77.44px_191.14px_0_#0000001A] md:mx-6 md:mt-8 xl:m-16 xl:rounded-[29px]",
          segoeUiFont.variable,
          segoeUiBoldFont.variable
        )}
      >
        <Header {...header} />
        <main className="max-w-414 pt-7.5 md:pt-5 xl:pt-24">{children}</main>
        <Footer {...footer} />
      </body>
    </html>
  );
};

export default RootLayout;
