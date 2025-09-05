"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

// dropdown Produtos
const products = [
  {
    href: "/credits-and-technical-assistance",
    title: "Crédito + Assistência técnica",
  },
  {
    href: "/payments-for-environmental-services",
    title: "Pagamentos por serviços ambientais",
  },
  { href: "/traceability-reward", title: "Prêmio por rastreabilidade" },
  { href: "/environmental-credits", title: "Créditos ambientais" },
];

// dropdown Soluções
const solutions = [
  { href: "/solutions-for-investors", title: "Investidores e Financiadores" },
  { href: "/solutions-for-corporates", title: "Empresas" },
  {
    href: "/technical-assistance-and-rural-extension",
    title: "Agentes de campo",
  },
  { href: "/producers", title: "Produtores e cooperativas" },
];

const topSimple = [
  { href: "/about-us", label: "Sobre nós" },
  { href: "/impact-investing", label: "Impacto" },
];

// Paleta rápida (ajusta se quiser ficar 100% igual)
const violet = {
  icon: "#5B2BBF", // roxo do ícone
  iconBg: "#F4F0FF", // roxo bem claro p/ hover
};

// Ícones simples (SVG inline)
function IconCredit() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke={violet.icon}
      strokeWidth="1.8"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14h4" />
    </svg>
  );
}
function IconPSA() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke={violet.icon}
      strokeWidth="1.8"
    >
      <path d="M12 3v18" />
      <path d="M6 9c3-5 9-5 12 0-3 5-9 5-12 0Z" />
    </svg>
  );
}
function IconTrace() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke={violet.icon}
      strokeWidth="1.8"
    >
      <path d="M4 19l6-6 4 4 6-6" />
      <circle cx="20" cy="6" r="2" />
    </svg>
  );
}
function IconCredits() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke={violet.icon}
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

// Itens com título + descrição + ícone
const productItems = [
  {
    href: "/credits-and-technical-assistance",
    title: "Crédito + Assistência técnica",
    desc: "Financiamento com suporte técnico para práticas sustentáveis.",
    Icon: IconCredit,
  },
  {
    href: "/payments-for-environmental-services",
    title: "Pagamentos por serviços ambientais",
    desc: "Receba por conservar ou restaurar a natureza.",
    Icon: IconPSA,
  },
  {
    href: "/traceability-reward",
    title: "Prêmio por rastreabilidade",
    desc: "Incentivo para cadeias produtivas transparentes.",
    Icon: IconTrace,
  },
  {
    href: "/environmental-credits",
    title: "Créditos ambientais",
    desc: "Monetize ações sustentáveis e reduza emissões.",
    Icon: IconCredits,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const pathname = usePathname();

  // link base e ativo (menos pesado que antes)
  const baseLink =
    "text-[15px] text-zinc-600 hover:text-zinc-900 transition-colors";
  const activeLink = "text-zinc-900 font-medium"; // era semibold; agora medium

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-9 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Violet logo"
            width={145}
            height={36}
            priority
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-9 md:flex">
          {/* Home */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`${baseLink} ${pathname === "/" ? activeLink : ""}`}
          >
            Home
          </Link>

          {/* Produtos */}
          <div
            className="relative"
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            <button className={`${baseLink} inline-flex items-center gap-1`}>
              Produtos
              <svg
                className={`w-5 h-5 mt-[1px] transition-transform duration-200 ${
                  openProducts ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* CARD centralizado sob o botão */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.10)] transition
              ${openProducts ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              {/* divide-y garante bordas consistentes entre os itens */}
              <ul className="divide-y divide-zinc-100">
                {productItems.map(({ href, title, desc, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex gap-3.5 rounded-xl px-4 py-4 hover:bg-[#F7F7FB] transition"
                    >
                      {/* círculo + ícone (um pouco maior) */}
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F0FF]">
                        <Icon />
                      </span>

                      {/* textos */}
                      <span className="grid">
                        <span className="text-[14px] font-[520] text-[#1C1333] leading-none">
                          {title}
                        </span>
                        <span className="mt-2 text-[13px] leading-[1.35] text-gray-500">
                          {desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soluções */}
          <div className="group relative">
            <button className={`${baseLink} inline-flex items-center gap-1`}>
              Soluções
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mt-[1px] transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M5 7l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[360px] rounded-xl border border-zinc-200 bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] opacity-0 transition group-hover:visible group-hover:opacity-100">
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

          {/* Sobre nós / Impacto */}
          {topSimple.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`${baseLink} ${active ? activeLink : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão English - um pouco mais “forte” */}
        <div className="ml-auto hidden md:block">
          <button className="rounded-full border border-zinc-300 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">
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

      {/* MOBILE MENU (igual de antes) */}
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
            <span className="mt-2 text-xs font-medium text-zinc-500">
              Produtos
            </span>
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
            <span className="mt-2 text-xs font-medium text-zinc-500">
              Soluções
            </span>
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
            <Link
              href="/about-us"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              Sobre nós
            </Link>
            <Link
              href="/impact-investing"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              Impacto
            </Link>
            <button className="mt-2 w-min rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
              English
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
