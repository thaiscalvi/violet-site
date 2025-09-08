"use client";

import Image from "next/image";
import Link from "next/link";

type LinkItem = { label: string; href: string };

const empresa: LinkItem[] = [
  { label: "Sobre nós", href: "/about-us" },
  { label: "Impacto", href: "/impact-investing" },
  { label: "Ouvidoria", href: "/ombudsman" },
];

const solucoes: LinkItem[] = [
  { label: "Investidores e Financiadores", href: "/solutions-for-investors" },
  { label: "Empresas", href: "/solutions-for-corporates" },
  { label: "Agentes de Campo", href: "/technical-assistance-and-rural-extension" },
  { label: "Produtores", href: "/producers" },
];

const links: LinkItem[] = [
  { label: "Risco e compliance", href: "/risk-and-compliance" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#37186E] text-white">
      {/* bloco principal */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-16 md:grid-cols-[320px_1fr_1fr_1fr]">

          {/* Coluna 1: logo + selo + legal */}
          <div className="flex flex-col gap-6">
            {/* Logo secundária */}
            <Image
              src="/footer/violet-logo-secondary.svg"
              alt="Violet"
              width={180}
              height={48}
              priority
            />

            {/* Selo ANBIMA */}
            <Image
              src="/footer/ambima-gestao.jpg"
              alt="Autorregulação ANBIMA – Gestão de Recursos"
              width={100}
              height={20}
              className="rounded-md"
            />

            {/* Legal */}
            <p className="mt-2 text-[11px] leading-relaxed text-white/70">
              VIOLET ASSESSORIA FINANCEIRA LTDA. CNPJ 52.538.983/0001-18
            </p>
          </div>

          {/* Coluna 2: Empresa */}
          <FooterColumn title="EMPRESA">
            <FooterLinks items={empresa} />
          </FooterColumn>

          {/* Coluna 3: Soluções */}
          <FooterColumn title="SOLUÇÕES">
            <FooterLinks items={solucoes} />
          </FooterColumn>

          {/* Coluna 4: Links + LinkedIn */}
          <FooterColumn title="LINKS">
            <FooterLinks items={links} />
            <div className="mt-4">
              <Link
                href="https://www.linkedin.com/company/violet-earth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#C7D7E2] text-[#0A66C2] hover:opacity-90 transition"
                title="LinkedIn"
              >
                {/* ícone do LinkedIn (SVG) */}
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.451 20.451h-3.554v-5.569c0-1.328-.028-3.037-1.85-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9.357V9h3.414v1.563h.049c.476-.9 1.637-1.85 3.369-1.85 3.603 0 4.269 2.372 4.269 5.456v6.282zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.115 20.451H3.558V9h3.557v11.451z"
                  />
                </svg>
              </Link>
            </div>
          </FooterColumn>
        </div>
      </div>

      {/* faixa inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-[12px] text-white/70">© {year} Violet Earth. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ===== Subcomponentes para manter o markup limpinho ===== */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold uppercase tracking-wide text-[#C7BEE8]">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function FooterLinks({ items }: { items: LinkItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
  href={item.href}
  className="inline-block text-[13px] leading-relaxed text-white/80 hover:text-violet-400 transition-colors duration-200"
>
  {item.label}
</Link>
        </li>
      ))}
    </ul>
  );
}
