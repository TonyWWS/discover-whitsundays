import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Discover Whitsundays | Your Ultimate Guide to Paradise",
  description: "Complete travel guide to the Whitsunday Islands including Whitehaven Beach, accommodation, tours, itineraries, and local tips from an Airlie Beach resident.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}