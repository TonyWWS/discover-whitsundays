import type { Metadata } from "next";
import { Fraunces, DM_Sans } from 'next/font/google';
import "./globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Discover Whitsundays | A local's guide",
  description: "Honest, curated travel guidance for the Whitsunday Islands from an Airlie Beach local.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}