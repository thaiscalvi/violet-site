import type { Metadata } from "next";
import "./globals.css";
// Update the import path if necessary, or create the Header component at the expected location
import Header from "./components/Header";

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
      </body>
    </html>
  );
}

