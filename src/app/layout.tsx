import clsx from "clsx";
import type { Metadata } from "next";
import { FC, ReactNode } from "react";

import { segoeUiFont, segoeUiBoldFont } from "@/constant";

import "./globals.css";

export const metadata: Metadata = {
  title: "NGO Website Design | Non-Profit Charity Landing Page UI",
  description:
    "Modern NGO website UI design for non-profits and charities. Clean homepage concept focused on donations, fundraising, and global humanitarian support.",
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
