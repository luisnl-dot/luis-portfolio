import type { Metadata } from "next";
import { syne, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Nagel — Digital Media Freelancer Berlin",
  description:
    "Social Media Management, Website Development & Online Shop — Agency-level results at freelancer prices. Based in Berlin.",
  keywords: [
    "freelancer berlin",
    "social media management berlin",
    "website entwicklung berlin",
    "content creation",
    "instagram marketing",
    "tiktok marketing",
  ],
  openGraph: {
    title: "Luis Nagel — Digital Media Freelancer",
    description: "Social Media. Websites. Online Shops. Berlin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-background text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
