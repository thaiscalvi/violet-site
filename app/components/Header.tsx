"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

/* =========================================
   Dados
========================================= */

// Topo
const topSimple = [
  { href: "/about-us", label: "Sobre nós" },
  { href: "/impact-investing", label: "Impacto" },
];

// Produtos (rich: título + descrição + ícone SVG do /public)
const products = [
  {
    href: "/credits-and-technical-assistance",
    title: "Crédito + Assistência técnica",
    desc: "Financiamento com suporte técnico para práticas sustentáveis.",
    icon: "/credito-assistencia-tecnica-purple.svg",
  },
  {
    href: "/payments-for-environmental-services",
    title: "Pagamentos por serviços ambientais",
    desc: "Receba por conservar ou restaurar a natureza.",
    icon: "/payment-purple.svg",
  },
  {
    href: "/traceability-reward",
    title: "Prêmio por rastreabilidade",
    desc: "Incentivo para cadeias produtivas transparentes.",
    icon: "/cow-tracking-purple.svg",
  },
  {
    href: "/environmental-credits",
    title: "Créditos ambientais",
    desc: "Monetize ações sustentáveis e reduza emissões.",
    icon: "/money-leaf-purple.svg",
  },
] as const;

// Soluções (rich também, para ficar igual ao site)
const solutions = [
  {
    href: "/solutions-for-investors",
    title: "Investidores e Financiadores",
    desc: "Acesse projetos de impacto com monitoramento contínuo.",
    icon: "/investor-icon-purple.svg",
  },
  {
    href: "/solutions-for-corporates",
    title: "Empresas",
    desc: "Transforme sua cadeia de fornecimento com soluções financeiras.",
    icon: "/building.svg",
  },
  {
    href: "/technical-assistance-and-rural-extension",
    title: "Agentes de campo",
    desc: "Amplie seu alcance com nossa plataforma integrada de monitoramento.",
    icon: "/ater-icon-purple.svg",
  },
  {
    href: "/producers",
    title: "Produtores e cooperativas",
    desc: "Acesse crédito verde e assistência técnica para implementar práticas sustentáveis.",
    icon: "/farmer-icon-purple.svg",
  },
] as const;

/* =========================================
   Ícones (wrapper)
========================================= */

const VIOLET = { bg: "#F4F0FF" };

function IconWrap({ children }: PropsWithChildren) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: VIOLET.bg }}
    >
      {children}
    </span>
  );
}

/* =========================================
   Helpers UI
========================================= */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 mt-[1px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavLink({ href, children }: PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const base = "text-[15px] text-zinc-600 hover:text-zinc-900 transition-colors";
  const active = pathname === href ? "text-zinc-900 font-medium" : "";
  return (
    <Link href={href} aria-current={pathname === href ? "page" : undefined} className={`${base} ${active}`}>
      {children}
    </Link>
  );
}

/* =========================================
   Dropdown Genérico
   - rich: itens com {title, desc, icon: path}
   - simple: itens com {title}
========================================= */

type RichItem = { href: string; title: string; desc: string; icon: string };
type SimpleItem = { href: string; title: string };

function Dropdown({
  label,
  width = 340, // px
  center = true,
  items,
  rich = false,
}: {
  label: string;
  width?: number;
  center?: boolean;
  items: ReadonlyArray<RichItem | SimpleItem>;
  rich?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const baseBtn = "text-[15px] text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center gap-1";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={baseBtn}>
        {label}
        <Chevron open={open} />
      </button>

      <div
        className={[
          "absolute top-full mt-2 rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.10)] transition",
          open ? "opacity-100 visible" : "opacity-0 invisible",
          center ? "left-1/2 -translate-x-1/2" : "left-0",
        ].join(" ")}
        style={{ width }}
      >
        {rich ? (
          <ul className="divide-y divide-zinc-100">
            {(items as ReadonlyArray<RichItem>).map(({ href, title, desc, icon }) => (
              <li key={href}>
                <Link href={href} className="flex gap-3.5 rounded-xl px-4 py-4 hover:bg-[#F7F7FB] transition">
                  <IconWrap>
                    <Image src={icon} alt="" width={24} height={24} />
                  </IconWrap>
                  <span className="grid">
                    <span className="text-[14px] font-[520] text-[#1C1333] leading-none">{title}</span>
                    <span className="mt-1 text-[13px] leading-[1.35] text-gray-500">{desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="p-3 grid gap-1">
            {(items as ReadonlyArray<SimpleItem>).map(({ href, title }) => (
              <li key={href}>
                <Link href={href} className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* =========================================
   Header
========================================= */

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-9 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Violet logo" width={145} height={36} priority />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          <NavLink href="/">Home</NavLink>

          <Dropdown label="Produtos" items={products} rich width={340} center />
          <Dropdown label="Soluções" items={solutions} rich width={380} center={false} />

          {topSimple.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* English */}
        <div className="ml-auto hidden md:block">
          <button className="rounded-full border border-zinc-300 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">
            English
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="ml-auto inline-flex items-center rounded-md border px-3 py-1.5 text-sm md:hidden"
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu (enxuto, mantendo ordem) */}
      {openMobile && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            <Link href="/" onClick={() => setOpenMobile(false)} className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
              Home
            </Link>

            <span className="mt-2 text-xs font-medium text-zinc-500">Produtos</span>
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpenMobile(false)}
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
                onClick={() => setOpenMobile(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {s.title}
              </Link>
            ))}

            {topSimple.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpenMobile(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {l.label}
              </Link>
            ))}

            <button className="mt-2 w-min rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
              English
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
