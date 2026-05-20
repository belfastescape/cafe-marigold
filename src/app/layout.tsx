import type { Metadata } from "next";
import { Fraunces, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Marigold — a sunny little stop",
  description:
    "Plant-forward plates, slow coffee and the best banana bread you've had this year. Open from 7.30, every day.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${caveat.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
