import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mine Sweeper",
  description: "Mine Sweeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mine Sweeper</title>
        <link rel="canonical" href="https://next-minesweeper-omega.vercel.app/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
