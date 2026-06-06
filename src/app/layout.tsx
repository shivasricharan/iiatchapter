import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telangana Architects Festival 2026 | IIA Telangana Chapter",
  description:
    "Join us for the Telangana Architects Festival — a grand celebration of architecture, design, and professional excellence by the Indian Institute of Architects, Telangana Chapter. June 12, 2026.",
  keywords:
    "Telangana Architects Festival, IIA, Indian Institute of Architects, TAF 2026, Architecture, Hyderabad",
  openGraph: {
    title: "Telangana Architects Festival 2026",
    description:
      "A grand celebration of architecture and design. June 12, 2026 | IIA Telangana Chapter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="antialiased min-h-full">{children}</body>
    </html>
  );
}
