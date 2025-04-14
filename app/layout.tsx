import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nm-company.vercel.app/"),
  title: "NM Company",
  description:
    "NM Company is a Solution for every event",
  openGraph: {
    title: "NM Company",
    description:
      "NM Company is a Solution for every event",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Creative Funding Logo",
      },
    ],
    type: "website",
    url: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Funding | Simple & Trusted Loan Solutions",
    description:
      "Looking for flexible loan options? Creative Funding offers various types of loans with an easy process, trustworthy service, and 24/7 support. Your path to reliable financial solutions starts here.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
