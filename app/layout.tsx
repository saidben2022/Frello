import type { Metadata } from "next";
import { Herr_Von_Muellerhoff, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
   default: siteConfig.siteName,
   template: `%s | ${siteConfig.siteName}`,
  } ,
  description: siteConfig.siteDescription,
  icons: [
    {
      url:"/logo.png",
      href:"/logo.png"
    }
  
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
