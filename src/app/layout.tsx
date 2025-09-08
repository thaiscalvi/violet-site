// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Violet",
  description: "Nature finance solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-zinc-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
