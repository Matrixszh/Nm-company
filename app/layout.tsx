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
  metadataBase: new URL("https://needaloannow.com"),
  title: "Creative Funding - Flexible Loan Solutions",
  description:
    "Creative Funding provides trusted loan solutions with an easy application process, reliable service, and 24/7 availability. We offer various types of loans tailored to meet your financial needs.",
  openGraph: {
    title: "Creative Funding | Flexible & Reliable Loan Solutions",
    description:
      "Experience hassle-free lending with Creative Funding. We offer various types of loans with an easy process, trustworthy service, and round-the-clock availability. Your reliable partner in financial solutions.",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Creative Funding Logo",
      },
    ],
    type: "website",
    url: "/logo2.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Funding | Simple & Trusted Loan Solutions",
    description:
      "Looking for flexible loan options? Creative Funding offers various types of loans with an easy process, trustworthy service, and 24/7 support. Your path to reliable financial solutions starts here.",
    images: ["/logo2.png"],
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
