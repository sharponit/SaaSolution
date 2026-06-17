import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Cpu, Eye, Lightbulb, LockKeyhole, Network, ShieldCheck, Workflow } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { missionVisionLocalized } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Mission & Vision | SaaSolution SL",
  description: "SaaSolution's mission and vision: one partner for hardware, software, security, process, and product execution."
};

const pillarIcons = [Cpu, LockKeyhole, Workflow, Boxes, ShieldCheck, Lightbulb] as const;

export default async function MissionVisionPage() {
  const locale = await getLocale();
  const t = missionVisionLocalized[locale];
  const c = common[locale];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#111318]">
      <section className="relative overflow-hidden bg-[#121212] px-6 py-8 text-[#F7F5EF] md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#121212_0%,#26342F_42%,#34301E_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,245,239,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,245,239,0.045)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link className="text-sm font-bold tracking-tight transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <Link className="inline-flex items-center gap-2 rounded-full border border-[#5EEAD4]/35 bg-[#5EEAD4]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4] transition hover:bg-[#5EEAD4] hover:text-[#121212] focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]" href="/contact">
                {t.navCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>

          <header className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#FFF100]">{t.label}</p>
            <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">
              {t.heroBody}
            </p>
          </header>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {(t.topCards as string[][]).map(([item, label], index) => {
              const icons = [Cpu, Network, ShieldCheck] as const;
              const Icon = icons[index];

              return (
                <div className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur" key={item}>
                  <Icon className="h-7 w-7 text-[#FFF100]" />
                  <p className="mt-5 text-2xl font-bold">{item}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/48">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="border border-[#111318]/10 bg-white p-8 shadow-sm md:p-10">
            <TargetHeader number="01" title={t.promiseTitle} />
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/68">{t.promiseBody}</p>
          </article>
          <article className="border border-[#111318]/10 bg-[#FFF100] p-8 shadow-sm md:p-10">
            <TargetHeader number="02" title={t.visionTitle} />
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/72">{t.visionBody}</p>
          </article>
        </div>
      </section>

      <section className="bg-[#E7EEE9] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">03</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.founderTitle}</h2>
          </div>
          <p className="text-lg font-semibold leading-8 text-[#111318]/68">{t.founderBody}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#7C3AED]">04</p>
              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.pillarsTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {t.pillars.map(([title, body], index) => {
                const Icon = pillarIcons[index] ?? Eye;

                return (
                  <article className="border border-[#111318]/10 bg-[#111318] p-7 text-[#F7F5EF] shadow-sm" key={title}>
                    <Icon className="h-6 w-6 text-[#5EEAD4]" />
                    <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#F7F5EF]/62">{body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[#111318] p-8 text-[#F7F5EF] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">{t.closingTitle}</h2>
            <p className="mt-5 max-w-4xl text-base font-semibold leading-7 text-[#F7F5EF]/64">{t.closingBody}</p>
          </div>
          <Link className="inline-flex w-fit items-center gap-3 rounded-full bg-[#FFF100] px-6 py-4 text-sm font-bold text-[#111318] transition hover:bg-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:ring-offset-2 focus:ring-offset-[#111318]" href="/contact">
            {t.ctaButton}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}

function TargetHeader({ number, title }: { number: string; title: string }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">{number}</p>
      <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
    </>
  );
}
