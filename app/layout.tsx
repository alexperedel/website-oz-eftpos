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
  title: "OZ Eftpos - Payment Solutions for Perth Businesses | EFTPOS Terminals",
  description: "Trusted by 300+ Perth businesses. Pay $0 processing fees with surcharge. Modern EFTPOS terminals, online payments & tap-to-pay solutions. 5.0★ rated. Local support.",
  keywords: "EFTPOS Perth, payment solutions, EFTPOS terminals, online payments, tap to pay, Perth business payments, zero fees, surcharge, Australian payment processing",
  authors: [{ name: "OZ Eftpos" }],
  openGraph: {
    title: "OZ Eftpos - Payment Solutions for Perth Businesses",
    description: "Trusted by 300+ Perth businesses. Pay $0 processing fees. Modern payment solutions with local support.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZ Eftpos - Payment Solutions for Perth Businesses",
    description: "Trusted by 300+ Perth businesses. Pay $0 processing fees with surcharge.",
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
