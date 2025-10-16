import type { Metadata } from "next";

import data from "@/content/layout.json";
import { Header } from "@/components";
import { segoeUi, segoeUiBold } from "@/constant";

import "../../styles/globals.css";
import { layoutProps } from "./types";

export const metadata: Metadata = {
  title: "NGO Website Design | Non-Profit Charity Landing Page UI",
  description:
    "Modern NGO website UI design for non-profits and charities. Clean homepage concept focused on donations, fundraising, and global humanitarian support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header }: layoutProps = data;
  return (
    <html lang="en" className="bg-[#D4D4D4] flex items-center justify-center">
      <body
        className={`${segoeUi.variable} ${segoeUiBold.variable} antialiased shadow-[39.55px_77.44px_191.14px_0_#0000001A] bg-[#ECECE2] rounded-2xl xl:rounded-[29px] max-w-400 mx-4 mt-6 md:mt-8 md:mx-6 xl:m-16 w-full`}
      >
        <Header {...header} />
        <main className="pt-24 max-w-414">{children}</main>
      </body>
    </html>
  );
}
