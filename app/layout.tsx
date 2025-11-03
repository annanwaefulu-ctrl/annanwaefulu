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
  openGraph: {
    title: "Anna Nwaefulu – Product Designer",
    description:
      "A portfolio showcasing innovative UI/UX design, product strategy, and creative direction by Anna Nwaefulu.",
    url: "https://annanwaefulu.com",
    siteName: "Anna Nwaefulu",
    images: [
      {
        url: "https://annanwaefulu.com/anna.png",
        width: 1200,
        height: 630,
        alt: "Anna Nwaefulu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Nwaefulu – Product Designer",
    description:
      "A portfolio showcasing innovative UI/UX design, product strategy, and creative direction by Anna Nwaefulu.",
    images: ["https://annanwaefulu.com/anna.png"],
    creator: "@anna_nwaefulu",
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
        className={`${antonio.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
