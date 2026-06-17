import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common, type Locale } from "@/lib/i18n";
import { legalChrome, type LegalSection } from "@/lib/legal-content";

type LegalDocumentPageProps = {
  locale: Locale;
  badge: string;
  title: string;
  intro: string;
  updated?: string;
  children?: ReactNode;
  sections: LegalSection[];
};

export function LegalDocumentPage({ locale, badge, title, intro, updated, children, sections }: LegalDocumentPageProps) {
  const c = common[locale];
  const chrome = legalChrome[locale];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#111318]">
      <section className="relative overflow-hidden bg-[#111318] px-6 py-8 text-[#F7F5EF] md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111318_0%,#173F3A_48%,#2B2340_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,245,239,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,245,239,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link className="text-sm font-bold tracking-tight transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <Link className="inline-flex items-center gap-2 rounded-full border border-[#FFF100]/35 bg-[#FFF100]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100] transition hover:bg-[#FFF100] hover:text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/contact">
                {chrome.questions}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>

          <header className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5EEAD4]">{badge}</p>
            <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">{title}</h1>
            <p className="mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">{intro}</p>
          </header>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur">
              <Scale className="h-8 w-8 text-[#FFF100]" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#F7F5EF]/50">{chrome.lastUpdated}</p>
              <p className="mt-2 text-2xl font-bold">{updated ?? chrome.updatedDate}</p>
            </div>
            <div className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F7F5EF]/50">{chrome.scopeLabel}</p>
              <p className="mt-3 text-base font-semibold leading-7 text-[#F7F5EF]/70">
                {chrome.scope}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">{chrome.document}</p>
            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight md:text-6xl">{chrome.sideTitle}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/64">
              {chrome.sideBody}
            </p>
            {children}
          </aside>

          <div className="grid gap-5">
            {sections.map((section, index) => (
              <article className="border border-[#111318]/10 bg-white p-6 shadow-sm md:p-8" key={section.title}>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0F766E]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{section.title}</h3>
                {section.body?.map((paragraph) => (
                  <p className="mt-4 text-sm font-semibold leading-7 text-[#111318]/64" key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li className="border-l-4 border-[#0F766E] bg-[#F7F5EF] px-4 py-3 text-sm font-semibold leading-6 text-[#111318]/70" key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? (
                  <p className="mt-5 border border-[#111318]/10 bg-[#FFF100] p-4 text-sm font-bold leading-6 text-[#111318]/76">{section.note}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
