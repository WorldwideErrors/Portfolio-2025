import { Angkor, Gilda_Display, Luxurious_Roman } from "next/font/google";

export const gilda = Gilda_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gilda",
});

export const lux_roman = Luxurious_Roman({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lux-roman",
});

export const angkor = Angkor({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-angkor",
});