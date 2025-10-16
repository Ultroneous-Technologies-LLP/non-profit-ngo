import localFont from "next/font/local";

export const segoeUi = localFont({
  src: "../../public/assets/font/segoe-regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-segoe-regular",
});

export const segoeUiBold = localFont({
  src: "../../public/assets/font/segoeu-bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-segoe-bold",
});