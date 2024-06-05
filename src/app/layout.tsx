import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Score from "./components/score";
import Rules from "./components/rules";

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
      <body className="relative flex h-full w-full items-center justify-center">
        <div
          className={
            inter.className +
            " flex min-h-screen w-full max-w-[1340px] flex-col items-center justify-center sm:w-fit"
          }
        >
          <Score />
          {children}
          <div className="bottom-0 right-0 sm:absolute">
            {/* Rules button. need to see what can i change to make this in a better way */}
            <Rules />
          </div>
        </div>
      </body>
    </html>
  );
}
