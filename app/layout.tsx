import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">

        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
