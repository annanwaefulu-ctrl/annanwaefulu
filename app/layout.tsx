import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anna Nwaefulu",
  description: "Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
