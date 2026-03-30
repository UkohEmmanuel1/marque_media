import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marque Media | Premium Media Production Agency",
  description:
    "Marque Media is a premium media production agency specializing in video production, photography, brand strategy, and social media content. Based in Lagos, Nigeria.",
  keywords: [
    "media production",
    "video production",
    "photography",
    "brand strategy",
    "Lagos",
    "Nigeria",
    "creative agency",
  ],
  openGraph: {
    title: "Marque Media | Premium Media Production Agency",
    description:
      "We craft visual stories that captivate, inspire, and drive results. Premium media production for brands that demand excellence.",
    type: "website",
    locale: "en_US",
    siteName: "Marque Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marque Media | Premium Media Production Agency",
    description:
      "We craft visual stories that captivate, inspire, and drive results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
