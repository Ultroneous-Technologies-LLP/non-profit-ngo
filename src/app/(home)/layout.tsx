import clsx from "clsx";
import type { Metadata } from "next";
import { FC, ReactNode } from "react";

import { segoeUiFont, segoeUiBoldFont } from "@/constant";

import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "NGO Website Design | Non-Profit Charity Landing Page UI",
  description:
    "Modern NGO website UI design for non-profits and charities. Clean homepage concept focused on donations, fundraising, and global humanitarian support.",
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

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx("antialiased", segoeUiFont.variable, segoeUiBoldFont.variable)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
