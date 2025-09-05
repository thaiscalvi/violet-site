"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// dropdown Produtos
const products = [
  { href: "/credits-and-technical-assistance", title: "Crédito + Assistência técnica" },
  { href: "/payments-for-environmental-services", title: "Pagamentos por serviços ambientais (PSA)" },
  { href: "/traceability-reward", title: "Prêmio por rastreabilidade" },
  { href: "/environmental-credits", title: "Créditos ambientais" },
];

// dropdown Soluções
const solutions = [
  { href: "/solutions-for-investors", title: "Investidores e Financiadores" },
  { href: "/solutions-for-corporates", title: "Empresas" },
  { href: "/technical-assistance-and-rural-extension", title: "Agentes de campo" },
  { href: "/producers", title: "Produtores e cooperativas" },
];

// itens simples do topo (sem dropdown)
const topSimple = [
  { href: "/about-us", label: "Sobre nós" },
  { href: "/impact-investing", label: "Impacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        {/* Logo temporário */}
        <Link href="/" className="flex items-center gap-2">
  <Image src="/logo.svg" alt="Violet logo" width={100} height={40} priority />
</Link>


        {/* Navegação desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {/* Home */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-sm ${
              pathname === "/"
                ? "text-zinc-900 underline underline-offset-4"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Home
          </Link>

          {/* Produtos (dropdown) */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900">
              Produtos <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[360px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="grid gap-1">
                {products.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soluções (dropdown) */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900">
              Soluções <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[360px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="grid gap-1">
                {solutions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sobre nós e Impacto */}
          {topSimple.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm ${
                  active
                    ? "text-zinc-900 underline underline-offset-4"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão idioma (lado direito) */}
        <div className="ml-auto hidden md:block">
          <button className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 hover:bg-zinc-50">
            English
          </button>
        </div>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center rounded-md border px-3 py-1.5 text-sm md:hidden"
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              Home
            </Link>

            <span className="mt-2 text-xs font-medium text-zinc-500">Produtos</span>
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {p.title}
              </Link>
            ))}

            <span className="mt-2 text-xs font-medium text-zinc-500">Soluções</span>
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {s.title}
              </Link>
            ))}

            {topSimple.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {l.label}
              </Link>
            ))}

            <button className="mt-2 w-min rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700">
              English
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
