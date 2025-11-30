import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heebo",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: content.business.name,
  description: content.text.headlines.main,
  openGraph: {
    title: content.business.name,
    description: content.text.headlines.main,
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body
        className={`${heebo.variable} ${assistant.variable} font-sans antialiased bg-[#F9F9F9] text-[#1A1A1A] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
