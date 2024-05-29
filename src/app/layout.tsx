import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Score from "./components/score";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rock, Paper, Scissors game",
  description: "Game made by FFGMP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex min-h-screen flex-col items-center justify-center"
        }
      >
        <Score />
        {children}
      </body>
    </html>
  );
}
