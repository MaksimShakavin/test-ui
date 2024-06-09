import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

export const metadata: Metadata = {
  title: "Ai-quizer",
  description: "Galera adventures",
};

const aloja = localFont({
  src: '../public/fonts/Aloja-Light.woff',
  display: 'swap',
  variable: '--font-aloja',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${aloja.variable}`}>
      <body className="p-10">{children}</body>
    </html>
  );
}
