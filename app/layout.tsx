import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Computacion",
  description: "Todo Computacion Mendoza. Empresa de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo_separado-02.svg" sizes="any" />
      <body className={inter.className}>
        <Header />
        <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          {children}
        </main>
        <ButtonGradient />
        <Footer />
      </body>
    </html>
  );
}
