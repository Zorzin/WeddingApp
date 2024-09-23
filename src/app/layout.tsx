import type { Metadata } from "next";
import { Petit_Formal_Script } from "next/font/google";
import "./globals.css";
import { CookiesProvider } from 'next-client-cookies/server';

const petitFormalScript = Petit_Formal_Script({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Madzia i Szymon!",
  description: "Wesele Folwark Wrzosówka 24.08.2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={petitFormalScript.className}>
        <CookiesProvider>{children}</CookiesProvider>;
      </body>
    </html>
  );
}
