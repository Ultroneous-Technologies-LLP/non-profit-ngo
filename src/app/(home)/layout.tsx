import type { Metadata } from "next";

import { segoeUi, segoeUiBold } from "@/constant";

import "../../styles/globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${segoeUi.variable} ${segoeUiBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
