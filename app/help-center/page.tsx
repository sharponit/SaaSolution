import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CircleHelp, Clock3, ContactRound, LifeBuoy, Mail, MessagesSquare, Search, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { helpCenterContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Help Center | SaaSolution SL",
  description: "Find answers to common SaaSolution questions, get support guidance, and contact the team when human help is needed."
};

const featuredIcons = [BookOpenCheck, LifeBuoy, ContactRound] as const;
const groupIcons = [Sparkles, Wrench, MessagesSquare, ShieldCheck] as const;

export default async function HelpCenterPage() {
  const locale = await getLocale();
  const c = common[locale];
  const t = helpCenterContent[locale];
  const routingCards = t.routes as string[][];
  const featuredAnswers = (t.featured as string[][]).map(([title, body, href, cta], index) => ({ icon: featuredIcons[index], title, body, href, cta }));
  const faqGroups = (t.groups as string[][]).map((items, index) => ({
    title: items[0],
    icon: groupIcons[index],
    questions: [[items[1], items[2]], [items[3], items[4]], [items[5], items[6]]]
  }));

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
                {t.nav as string}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5EEAD4]">{t.label as string}</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                {t.title as string}
              </h1>
              <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">
                {t.intro as string}
              </p>
            </header>

            <aside className="border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.065] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Search className="h-8 w-8 text-[#FFF100]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F7F5EF]/56">{t.path as string}</p>
              </div>
              <div className="mt-7 grid gap-3">
                {routingCards.map(([title, body, href, cta]) => (
                  <Link className="group border border-[#F7F5EF]/10 bg-[#111318]/45 p-4 transition hover:border-[#FFF100]/50" href={href} key={title}>
                    <p className="text-base font-bold text-[#F7F5EF]">{title}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#F7F5EF]/56">{body}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100]">
                      {cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {featuredAnswers.map((item) => {
            const Icon = item.icon;

            return (
              <article className="border border-[#111318]/10 bg-white p-7 shadow-sm" key={item.title}>
                <Icon className="h-8 w-8 text-[#0F766E]" />
                <h2 className="mt-6 text-2xl font-bold tracking-tight">{item.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#111318]/62">{item.body}</p>
                <Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111318] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2" href={item.href}>
                  {item.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#E7EEE9] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">{t.faq as string}</p>
            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.faqTitle as string}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/64">
              {t.faqIntro as string}
            </p>
          </aside>

          <div className="grid gap-5">
            {faqGroups.map((group) => {
              const Icon = group.icon;

              return (
                <section className="border border-[#111318]/10 bg-white p-6 shadow-sm md:p-8" key={group.title}>
                  <div className="flex items-center gap-3 border-b border-[#111318]/10 pb-5">
                    <Icon className="h-6 w-6 text-[#0F766E]" />
                    <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
                  </div>
                  <div className="mt-6 divide-y divide-[#111318]/10">
                    {group.questions.map(([question, answer]) => (
                      <details className="group py-5 first:pt-0 last:pb-0" key={question}>
                        <summary className="flex cursor-pointer list-none gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]">
                          <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-[#0F766E]" />
                          <span className="flex flex-1 items-start justify-between gap-4">
                            <span className="text-lg font-bold tracking-tight">{question}</span>
                            <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#111318]/12 text-base font-bold leading-none text-[#111318]/54 transition group-open:rotate-45 group-open:bg-[#0F766E] group-open:text-white">+</span>
                          </span>
                        </summary>
                        <p className="ml-8 mt-3 text-sm font-semibold leading-6 text-[#111318]/62">{answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[#FFF100] p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#111318]/54">
              <Clock3 className="h-4 w-4" />
              {t.unsure as string}
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">{t.unsureTitle as string}</h2>
            <p className="mt-5 max-w-4xl text-base font-semibold leading-7 text-[#111318]/66">
              {t.unsureBody as string}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-3 rounded-full bg-[#111318] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2" href="https://saasupport.com">
              <LifeBuoy className="h-5 w-5" />
              {t.supportLabel as string}
            </Link>
            <Link className="inline-flex items-center gap-3 rounded-full border border-[#111318]/20 px-6 py-4 text-sm font-bold text-[#111318] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#111318] focus:ring-offset-2" href="/contact">
              <Mail className="h-5 w-5" />
              {t.contactLabel as string}
            </Link>
          </div>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
