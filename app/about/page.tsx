import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Building2, CheckCircle2, Globe2, Layers3, Target } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { aboutContent, common } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { aboutAsideContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "About SaaSolution SL",
  description: "Learn what SaaSolution stands for, why it was created, and how the studio builds practical software for international markets."
};

const principles = [
  { icon: Target, tone: "text-[#FFF100]" },
  { icon: Layers3, tone: "text-[#5EEAD4]" },
  { icon: BrainCircuit, tone: "text-[#C4B5FD]" },
  { icon: Globe2, tone: "text-[#FBBF24]" }
] as const;

export default async function AboutPage() {
  const locale = await getLocale();
  const t = aboutContent[locale];
  const c = common[locale];
  const aside = aboutAsideContent[locale];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#111318]">
      <section className="relative overflow-hidden bg-[#111318] px-6 py-8 text-[#F7F5EF] md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111318_0%,#1D2E2B_48%,#2A2340_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,245,239,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,245,239,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link className="text-sm font-bold tracking-tight transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <Link className="inline-flex items-center gap-2 rounded-full border border-[#FFF100]/35 bg-[#FFF100]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100] transition hover:bg-[#FFF100] hover:text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/partners">
                {t.navCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5EEAD4]">{t.label}</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">
                {t.heroBody}
              </p>
            </header>

            <aside className="border-l border-[#F7F5EF]/14 pl-6">
              <Building2 className="h-10 w-10 text-[#FFF100]" />
              <p className="mt-6 text-2xl font-bold leading-tight text-[#F7F5EF]">
                {aside[0]}
              </p>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#F7F5EF]/55">
                {aside[1]}
              </p>
            </aside>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {t.stats.map(([value, label]) => (
              <div className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur" key={value}>
                <p className="text-4xl font-bold tracking-tight text-[#FFF100]">{value}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/56">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <article className="border border-[#111318]/10 bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">01</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{t.meaningTitle}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/68">{t.meaningBody}</p>
          </article>

          <article className="border border-[#111318]/10 bg-[#FFF100] p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#111318]/54">02</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{t.originTitle}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/72">{t.originBody}</p>
          </article>
        </div>
      </section>

      <section className="bg-[#E8ECE8] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">03</p>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.beliefsTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {t.beliefs.map(([title, body], index) => {
                const Icon = principles[index]?.icon ?? CheckCircle2;
                const tone = principles[index]?.tone ?? "text-[#0F766E]";

                return (
                  <article className="border border-[#111318]/10 bg-[#111318] p-7 text-[#F7F5EF] shadow-sm" key={title}>
                    <Icon className={`h-6 w-6 ${tone}`} />
                    <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#F7F5EF]/62">{body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#7C3AED]">04</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.creationTitle}</h2>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#111318]/68">{t.creationBody}</p>
          </div>
          <aside className="bg-[#111318] p-8 text-[#F7F5EF] md:p-10">
            <h3 className="text-3xl font-bold leading-tight tracking-tight">{t.ctaTitle}</h3>
            <p className="mt-5 text-base font-semibold leading-7 text-[#F7F5EF]/64">{t.ctaBody}</p>
            <Link className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFF100] px-6 py-4 text-sm font-bold text-[#111318] transition hover:bg-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:ring-offset-2 focus:ring-offset-[#111318]" href="/partners">
              {t.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </aside>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
