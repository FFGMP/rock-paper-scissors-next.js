import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./utils/provider";

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
          " relative flex h-full w-full items-center justify-center"
        }
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
