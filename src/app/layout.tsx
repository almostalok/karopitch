import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karo Pitch — Where Founders Meet Capital",
  description:
    "India's most exclusive pitch platform. Curated dealflow, vetted investors, zero noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
