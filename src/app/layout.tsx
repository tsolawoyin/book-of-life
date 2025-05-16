import { Poppins, Montserrat, Geist } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import "bulma/css/bulma.css";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"]
})

const geist = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "UI Book Of Life",
  description: "Easily check student's result and performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
