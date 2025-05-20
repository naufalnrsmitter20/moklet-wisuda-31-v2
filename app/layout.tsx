import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AOSInit from "@/lib/AOSInit";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Students Honoring Innovations & Noteworthy Excellence",
  description: "Students Honoring Innovations & Noteworthy Excellence SMK Telkom Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} `}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
