import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seabraz IPR & Corporate Law Firm ",
  description:
    "Seabraz IPR & Corporate Law Firm — Trusted advisors in Intellectual Property Rights, Corporate Law, M&A, and International Trade. Delivering excellence across jurisdictions with precision, integrity, and strategic vision.",
  keywords: [
    "law firm",
    "corporate law",
    "intellectual property",
    "IPR",
    "legal counsel",
    "Seabraz",
    "mergers and acquisitions",
    "international trade law",
  ],
  icons: {
    icon: [
      { url: "/seabraz.png", sizes: "32x32", type: "image/png" },
      { url: "/seabraz.png", sizes: "192x192", type: "image/png" },
      { url: "/seabraz.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/seabraz.png",
  },
  openGraph: {
    title: "Seabraz IPR & Corporate Law Firm | Premier Legal Counsel",
    description:
      "Trusted advisors in Intellectual Property Rights, Corporate Law, M&A, and International Trade.",
    type: "website",
    locale: "en_US",
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
      className={`h-full antialiased ${inter.variable} ${garamond.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
