import "./globals.css";

import type { Metadata } from "next";
import { Inter as InterFF } from "next/font/google";

export const metadata: Metadata = {
  title: "Pokequiz",
  description: "Demonstração de Pokequiz",
};

const Inter = InterFF({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden h-svh w-svw flex flex-col items-center justify-center bg-slate-50 ${Inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
