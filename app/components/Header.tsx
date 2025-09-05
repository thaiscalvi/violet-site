"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/impact-investing", label: "Impact" },
  { href: "/solutions-for-investors", label: "Investors" },
  { href: "/solutions-for-corporates", label: "Corporates" },
  { href: "/technical-assistance-and-rural-extension", label: "Field agents" },
  { href: "/producers", label: "Producers" },
  { href: "/credits-and-technical-assistance", label: "Credit + TA" },
  { href: "/payments-for-environmental-services", label: "PSA" },
  { href: "/traceability-reward", label: "Traceability reward" },
  { href: "/environmental-credits", label: "Environmental credits" },
  { href: "/risk-and-compliance", label: "Compliance" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/ombudsman", label: "Ombudsman" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Violet
          </Link>

          {/* desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm hover:underline ${active ? "font-medium underline" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-md border px-3 py-2 text-sm md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden">
            <nav className="grid gap-2 border-t py-3">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-2 py-1 text-sm hover:bg-zinc-100 ${active ? "font-medium underline" : ""}`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}